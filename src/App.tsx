import React from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* setup routes */}
      <BrowserRouter>
          <Switch>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
