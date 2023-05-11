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

const socket = io.connect("http://localhost:4000");

export const Chat = () => {
  const [messageTyped, setmessageTyped] = useState();
  const [users, setUsers] = useState();
  const [selectedUser,setSelectedUser] = useState()
  // const [outgoingMessages, setoutgoingMessages] = useState([
  //   { name: "chandru", message: "Hey How are You man ?", time: new Date() },
  // ]);
  // const [incomingMessages, setincomingMessages] = useState([
  //   { name: "Nithi", message: "Hey Super Machha !", time: new Date() },
  // ]);

  const [messages,setMessages] = useState([{type:'incoming',msg:{ name: "chandru", message: "Hey How are You man ?", time: new Date() }}])

  const handleSendMessage = async () => {
    console.log("sent_msg", messageTyped);

    if (messageTyped) {
      const msgdata = {
        type:'outgoing',
        msg:{
        name: "chandru",
        message: messageTyped,
        time: new Date(),
      }};
      setMessages((prevmsg) => [...prevmsg, msgdata]);
      await socket.emit("send_message", msgdata);
    }
  };

  const handleSelectedUser = (user)=>{
    setSelectedUser(user)
  }

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      console.log(data);
      data.type = 'incoming'
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
    <div className="chatcontainer">
      <MainContainer>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>
            {users && users.length &&
              users.map((user) => {
                return(
                  <Conversation
                    name={user.username}
                    onClick={()=>handleSelectedUser(user)}
                    // lastSenderName="Chandru"
                    info={user.usermail}
                  ></Conversation>
                );
              })}
          </ConversationList>
        </Sidebar>
        <ChatContainer>
          {selectedUser && <ConversationHeader>
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
          </ConversationHeader>}
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

            {/* {incomingMessages &&
              incomingMessages.length > 0 &&
              incomingMessages.map((message) => {
                return (
                  <Message
                    model={{
                      message: message.message,
                      sentTime: message.time,
                      sender: message.name,
                      direction: "incoming",
                    }}
                  />
                );
              })} */}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onChange={(val) => setmessageTyped(val)}
            onSend={handleSendMessage}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};
