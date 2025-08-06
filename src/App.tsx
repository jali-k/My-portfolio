import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
// import Reviews from './components/Reviews';
// import Blog from './components/Blog';
import Contact from "./components/Contact";
import CursorFollower from "./components/CursorFollower";

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <CursorFollower />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Resume />
        <Portfolio />
        {/* <Reviews /> */}
        {/* <Blog /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
