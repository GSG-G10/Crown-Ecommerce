import { Home } from "./pages";
import "./App.css";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
       <Home />
      </Router>
    </div>
  );
}

export default App;
