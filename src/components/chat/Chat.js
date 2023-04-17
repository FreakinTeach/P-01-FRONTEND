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

const socket = io.connect("http://localhost:3000");

export const Chat = () => {
  const [messageTyped, setmessageTyped] = useState();
  const [outgoingMessages, setoutgoingMessages] = useState([
    { name: "chandru", message: "Hey How are You man ?", time: new Date() },
  ]);
  const [incomingMessages, setincomingMessages] = useState([
    { name: "Nithi", message: "Hey Super Machha !", time: new Date() },
  ]);

  const handleSendMessage = async () => {
    console.log("sent_msg", messageTyped);

    if (messageTyped) {
      const msgdata = {
        name: "chandru",
        message: messageTyped,
        time: new Date(),
      };
      setoutgoingMessages((prevmsg) => [...prevmsg, msgdata]);
      await socket.emit("send_message", msgdata);
    }
  };

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      console.log("recieved :", data);
      setincomingMessages((prevmsg) => [...prevmsg, data]);
    });
  }, [socket]);

  return (
    <div className="chatcontainer">
      <MainContainer>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>
            <Conversation
              name="Chandru"
              lastSenderName="Nithi"
              info="machha we got 100crores"
              style={{ justifyContent: "start" }}
            ></Conversation>

            <Conversation
              name="Nithi"
              lastSenderName="Chandru"
              info="we are billionares now"
            ></Conversation>
          </ConversationList>
        </Sidebar>
        <ChatContainer>
        <ConversationHeader>
              <ConversationHeader.Back />
              <ConversationHeader.Content
                userName="Nithis Gowda"
                info="Active 10 mins ago"
              />
              <ConversationHeader.Actions>
                <VoiceCallButton />
                <VideoCallButton />
                <InfoButton />
              </ConversationHeader.Actions>
            </ConversationHeader>
          <MessageList>
            {outgoingMessages &&
              outgoingMessages.length > 0 &&
              outgoingMessages.map((message) => {
                return (
                  <Message
                    model={{
                      message: message.message,
                      sentTime: message.time,
                      sender: message.name,
                      direction: "outgoing",
                    }}
                  />
                );
              })}

            {incomingMessages &&
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
              })}
           
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
