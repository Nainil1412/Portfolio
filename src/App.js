import { useContext } from "react";
import { themeContext } from "./Context";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Intro from "./component/Intro/Intro";
import Resume from "./component/Resume/Resume";
import Skill from "./component/Skills/Skill";
import Portfolio from "./component/Portfolio/Portfolio";
import Quotes from "./component/Quotes/Quotes";
import Footer from "./component/Footer/Footer";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Resume />
      <Skill />
      <Portfolio />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
