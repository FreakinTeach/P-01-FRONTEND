import React from "react";
import "./app.css";
import { TopNavigation } from "./components/Navigation/TopNavigation";
import { SideNavigation } from "./components/Navigation/SideNavigation";
import { Compiler } from "./components/compiler/Compiler";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chat } from "./components/chat/Chat";
import { CodeBank } from "./components/codebank/CodeBank";
import { Auth } from "./components/auth/Auth";
import { SignUp } from "./components/auth/SignUp";
import {Main} from "./components/landing/Main"
import Header from "./components/landing/Header";

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        {/* <TopNavigation /> */}
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
        {/* <div className="bodyconatiner"> */}
          {/* <SideNavigation /> */}
          {/* <section> */}
          {/* <Header /> */}
            <Routes>
              <Route path="/codebank" element={<CodeBank />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/code" element={<Compiler />} />
            </Routes>
          {/* </section> */}

        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
