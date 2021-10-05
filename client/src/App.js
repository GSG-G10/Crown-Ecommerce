import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Route exact path="/product/:id" component={Product} />
    </Router>
  );
}

export default App;
