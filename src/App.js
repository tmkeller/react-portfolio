import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>

        <main className="container-fluid main_content">
          <Route exact path="/" component={ About }/>
          <Route exact path="/contact" component={ Contact }/>
          <Route exact path="/portfolio" component={ Portfolio }/>
          {/* <Route component={ Error }/> */}
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
