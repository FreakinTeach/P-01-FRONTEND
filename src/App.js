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
import { Main } from "./components/landing/Main";
import Header from "./components/landing/Header";
import { TechStack } from "./components/techstack/TechStack";

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>

        <section className="maintechstack_sidebar">
          <TechStack />
          <div className="maintechstack_rightcontainer">
          <Routes>
            {/* <Route path="/techstack" element={<TechStack />} /> */}
            <Route path="/codebank" element={<CodeBank />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/code" element={<Compiler />} />
          </Routes>
          </div>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
