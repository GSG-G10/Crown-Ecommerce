import { Home } from "./pages";
import "./App.css";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { Complete } from "./components";

import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ minHeight: "calc(100vh - 32px - 366.3px)" }}>
        {/* calc(100vh - nav height - footer height) */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user">
            user page
          </Route>
          <Route exact path="/card">
            card page
          </Route>
          <Route exact path="/" component={Footer} />
          <Route exact path="/search" component={Complete} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
