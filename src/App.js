import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
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
      </Switch>
    </Router>
  );
}
export default App;
https://github.com/akshay124-pixel/Portfolio.gitgit remote add origin <https://github.com/akshay124-pixel/Portfolio.>