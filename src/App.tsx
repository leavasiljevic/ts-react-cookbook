import React, { useState } from "react";
import { start } from "repl";


import "./App.css";
import { Navigation } from "./Navigation";
// import LogInPage from "./pages/LogInPage";
// import { LogInPage } from "./pages/LogInPage";


function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <LogInPage setToken={setToken} />
  // }

  return (
    <Navigation />
  );
}

export default App;
