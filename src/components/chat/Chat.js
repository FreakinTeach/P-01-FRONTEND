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

const socket = io.connect("http://localhost:4000");

export const Chat = () => {
  const [users, setUsers] = useState();
  const [messageTyped, setmessageTyped] = useState();
  const [selectedUser, setSelectedUser] = useState();

  const [messages, setMessages] = useState([]);
  console.log(messages)



  const handleSendMessage = async () => {
    if (messageTyped) {
      const msgdata = {
        type: "outgoing",
        msg: {
          // name: {selectedUser.username},
          myId:'645924d9bac89fb71dbc7b6f',
          userId:"645925858c1552f37f751a46",
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
  };

  useEffect(() => {

    socket.emit("connected","645925858c1552f37f751a46")

    socket.on("recieve_message", (data) => {
      console.log("recieved_MSG",data);
      data.type = "incoming";
      setMessages((prevmsg) => [...prevmsg, data]);
    });
  }, [socket]);
  

  useEffect(() => {
    axios
      .get("http://localhost:4000/user")
      .then((res) => setUsers(res.data.data))
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
            {users &&
              users.length &&
              users.map((user) => {
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
