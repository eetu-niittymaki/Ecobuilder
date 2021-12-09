import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import "./App.css";
import FormContainer from "./Components/FormContainer";

import Amplify, { Storage } from "aws-amplify";
import awsconfig from "./aws-exports";

function App() {
  Amplify.configure(awsconfig);

  const getList = () => {
    console.log("geting");
    Storage.list("") // for listing ALL files without prefix, pass '' instead
      .then((result) => console.log(result))
      .catch((err) => console.log("err"));
  };
  /*
  await Storage.get(key: string, config: {
  level?: private | protected | public, // defaults to `public`
  identityId?: string, // id of another user, if `level: protected`
  download?: boolean, // defaults to false
  expires?: number, // validity of the URL, in seconds. defaults to 900 (15 minutes)
  contentType?: string // set return content type, eg "text/html"
});
*/
  return (
    <div className="App">
      <header className="App-header"></header>
      <FormContainer />
      <button onClick={getList}>getList</button>
    </div>
  );
}

export default App;
