import React from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home/Home";
import SideBar from "./SideBar/SideBar";
import Article from "./Article/Article";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />

      {/* setup routes */}
      <BrowserRouter>
          <Switch>
              <Route path="/articles/aspnet/webapi">
                  <Article
                      title={"hsdjlh67678687687687687"}
                      introduction={`
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                      `}
                      sections={[`
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                      `,
                          `
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                      `]}
                      pictures={
                          ['/article_sources/aspnet/webapi/demopic.png',
                          '/article_sources/aspnet/webapi/demopic.png'
                          ]}
                  />
              </Route>

              <Route path={"/"}>
                  <Home />
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
