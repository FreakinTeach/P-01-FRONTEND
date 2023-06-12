import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import axios from "axios";
import "brace/mode/javascript";
import "brace/theme/tomorrow_night";
import "./compiler.css";
import { TSHeader } from "../techstack/TSHeader";

export const Compiler = () => {
  const [storevalue, setstorevalue] = useState();
  const [compiledResult, setcompiledResult] = useState();

  const onChange = (newValue) => {
    setstorevalue(newValue);
  };

  const showresult = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("LanguageChoice", "17");
    encodedParams.append("Program", `${storevalue}`);

    const options = {
      method: "POST",
      url: "https://code-compiler.p.rapidapi.com/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "5fe2015c38msh07a959777c57728p12ae57jsn1c0fe12b2aad",
        "X-RapidAPI-Host": "code-compiler.p.rapidapi.com",
      },
      data: encodedParams,
    };
    axios(options)
      .then((res) => setcompiledResult(res.data.Result))
      .catch((err) => console.log(err));
  };

  return (
    <section className="compilerContainer">
      <TSHeader layout={'Welcome to Compiler'}/>
      <div className="editorcompilerContainer">
        <section className="compilereditoreheader">
          <p>JavaScript</p>
          <span>
            <p onClick={showresult}>Run</p>
            <p>Copy code</p>
          </span>
        </section>

        <AceEditor
          mode="javascript"
          theme="tomorrow_night"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          style={{ width: "50vw", height: "50vh", fontSize: "16px" }}
        />

        <section className="editorcompilerresult">
          <p>Output:</p>
          <span>{compiledResult}</span>
        </section>
      </div>
    </section>
  );
};
