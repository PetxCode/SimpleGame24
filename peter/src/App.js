import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registration from "./Registration/Registration";
import UserSettings from "./Registration/UserSettings";
import Header from "./TheComp/Header";
import HomeScreen from "./TheComp/HomeScreen";
import TopPart from "./TheComp/TopPart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/register" exact component={Registration} />
          <Route path="/setting" exact component={UserSettings} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
