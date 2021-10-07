import "./App.css";
import "antd/dist/antd.css";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { Complete } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      Hi from App
      <Router>
        <Route exact path="/" component={Footer} />
        <Route exact path="/search" component={Complete} />
        <Route exact path="/product/:id" component={Product} />
      </Router>
    </div>
  );
}

export default App;
