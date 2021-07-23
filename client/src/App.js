import React from "react";
import {Box} from "@material-ui/core";
import Header from "./components/Header";
import Home from "./components/home/Home";
import {BrowserRouter} from "react-router-dom";
import DetailView from "./components/Post/DetailView";
import CreateView from "./components/Post/CreateView";
import UpdateView from "./components/Post/UpdateView";
import AppWithRouterAccess from './AppWithRouterAccess';

function App() {
  return (
    <BrowserRouter>
    <AppWithRouterAccess />
       <Header />
      <Box style={{marginTop:64}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={DetailView} />
          <Route exact path="/create" component={CreateView} />
          <Route exact path="/update/:id" component={UpdateView} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
