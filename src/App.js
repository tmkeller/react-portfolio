import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>

        <main className="container-fluid main_content">
          <Switch>
            <Route exact path="/" component={ About }/>
            <Route exact path="/contact" component={ Contact }/>
            <Route exact path="/portfolio" component={ Portfolio }/>
            <Route component={ Error }/>
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
