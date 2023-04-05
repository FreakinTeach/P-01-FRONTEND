import React, { useState } from "react";
import "./app.scss";
import { TopNavigation } from "./components/Navigation/TopNavigation";
import { SideNavigation } from "./components/Navigation/SideNavigation";
import { Compiler } from "./components/compiler/Compiler";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chat } from "./components/chat/Chat";
import { CodeBank } from "./components/codebank/CodeBank";

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <TopNavigation />
        <div className="bodyconatiner">
          <SideNavigation />
          <section>
            <Routes>
              <Route path="/" element={<CodeBank />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/code" element={<Compiler />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
