import "./App.css";
import "antd/dist/antd.css";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      Hi from App
      <Router>
        <Route exact path="/" component={Footer} />
        <Route exact path="/product/:id" component={Product} />
      </Router>
    </div>
  );
}

export default App;
