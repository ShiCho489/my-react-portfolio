import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import github from "./assets/github.png"
import linkedin from "./assets/lnk.png";
import twitter from "./assets/twitter.png";
import Social from "./components/Social/Social";


function App() {
  return (
    <div className="App">
     <Header />
      
    <main>
      <div className="page" id="home">
        <Home />
      </div>
      <div className="page" id="about">
        <About />
      </div>
      <div className="socials-wrapper">
        <h2 className="quick-links">Links</h2>
        <div className="socials">
          <Social logo={github} title="GitHub" />
          <Social logo={linkedin} title="LinkedIn" />
          <Social logo={twitter} title="Twitter" />
          

        </div>
        <div className="page" id="projects">
         <Project />
        </div>
      </div>
    </main>

 
     
     
    </div>
  );
}

export default App;
