import { Home } from "./pages";
import "./App.css";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { Complete, Login } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Footer} />
        <Route exact path="/search" component={Complete} />
        <Route exact path="/product/:id" component={Product} />
      </Router>
    </div>
  );
}

export default App;
