import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />

          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
