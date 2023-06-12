import React from "react";
import "./app.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Compiler } from "./components/compiler/Compiler";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chat } from "./components/chat/Chat";
import { CodeBank } from "./components/codebank/CodeBank";
import { Auth } from "./components/auth/Auth";
import { Main } from "./components/landing/Main";
import { TechStack } from "./components/techstack/TechStack";

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          <Route element={<TechStack />}>
            <Route path="/codebank" element={<CodeBank />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/code" element={<Compiler />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
