import React, { useEffect, useState } from "react";
import "./chat.css";
import io from "socket.io-client";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import axios from "axios";
import { TSHeader } from "../techstack/TSHeader";
import { NODE_URL } from "../../config/globalconfig";

const socket = io.connect(NODE_URL);

export const Chat = () => {
  let getUser = localStorage.getItem("user");
  const loggedinUser = getUser && JSON.parse(getUser);
  const [chatusers, setChatUsers] = useState();
  const [messageTyped, setmessageTyped] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (messageTyped && loggedinUser) {
      const msgdata = {
        type: "outgoing",
        msg: {
          // name: {selectedUser.username},
          myId:loggedinUser._id,
          userId:selectedUser._id,
          message: messageTyped,
          time: new Date(),
        },
      };
      setMessages((prevmsg) => [...prevmsg, msgdata]);
      await socket.emit("send_message", msgdata);
    }
  };

  const handleSelectedUser = (user) => {
    setSelectedUser(user);
    setMessages([])
  };

  useEffect(() => {
    socket.emit("connected",loggedinUser._id)

    socket.on("recieve_message", (data) => {
     
      data.type = "incoming";
      setMessages((prevmsg) => [...prevmsg, data]);
    });
  }, [socket]);
  

  useEffect(() => {
    axios
      .get(`${NODE_URL}/user`)
      .then((res) => setChatUsers(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <TSHeader layout={'Welcome to Chat'}/>
    <div className="chatcontainer">
      <MainContainer style={{border:'none'}}>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>
            {chatusers &&
              chatusers.length &&
              chatusers.map((user) => {
                if(user._id != loggedinUser._id)
                return (
                  <Conversation
                    name={user.username}
                    onClick={() => handleSelectedUser(user)}
                    // lastSenderName="Chandru"
                    info={user.usermail}
                  ></Conversation>
                );
              })}
          </ConversationList>
        </Sidebar>

        {selectedUser && (
          <ChatContainer>
            <ConversationHeader>
              <ConversationHeader.Back />
              <ConversationHeader.Content
                userName={selectedUser.username}
                info="Active 10 mins ago"
              />
              <ConversationHeader.Actions>
                <VoiceCallButton />
                <VideoCallButton />
                <InfoButton />
              </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList>
              {messages &&
                messages.length > 0 &&
                messages.map((message) => {
                  return (
                    <Message
                      model={{
                        message: message.msg.message,
                        sentTime: message.msg.time,
                        sender: message.msg.name,
                        direction: message.type,
                      }}
                    />
                  );
                })}
            </MessageList>
            <MessageInput
              placeholder="Type message here"
              onChange={(val) => setmessageTyped(val)}
              onSend={handleSendMessage}
            />
          </ChatContainer>
        )}
      </MainContainer>
    </div>
    </>
  );
};
