import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import BestSkills from "./components/bestSkills/BestSkills";

function App() {
  return (
    <div style={{backgroundColor:'#0a0118'}} className="w-full h-auto text-lightText ">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <BestSkills />
        <Features />
        <Projects />
        {/* <Testimonial /> */}
        <Contact />
        {/* <Footer /> */}
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
