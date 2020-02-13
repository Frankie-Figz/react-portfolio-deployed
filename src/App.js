import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/index";
import Portfolio from "./pages/Portfolio/index"
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;