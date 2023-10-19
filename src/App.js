import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
        <Route exact path="/Skills">
          <Skills />
        </Route>
        <Route exact path="/ContactForm">
          <ContactForm />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
