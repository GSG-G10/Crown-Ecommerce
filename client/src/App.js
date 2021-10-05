import "./App.css";

import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          homepage
        </Route>
        <Route exact path="/fav">
          fav page
        </Route>
        <Route exact path="/user">
          user page
        </Route>
        <Route exact path="/card">
          card page
        </Route>
      </Switch>
    </div>
  );
}

export default App;
