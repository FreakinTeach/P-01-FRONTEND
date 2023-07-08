import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";
import { Compiler } from "./components/compiler/Compiler";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chat } from "./components/chat/Chat";
import { CodeBank } from "./components/codebank/CodeBank";
import { Auth } from "./components/auth/Auth";
import { Main } from "./components/landing/Main";
import { TechStack } from "./components/techstack/TechStack";
import { UserSetting } from "./components/settings/UserSetting";

function App() {
  let userLoggedIn = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />

          {userLoggedIn && 
          <Route element={<TechStack />}>
            <Route path="/codebank" element={<CodeBank />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/code" element={<Compiler />} />
            <Route path="/setting" element={<UserSetting/>} />
          </Route>}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
