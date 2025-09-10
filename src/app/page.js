
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Valorent from "./component/Valorent";
import Story from "./component/Story";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Loading from "./component/Loading";

export default function Home() {
  return (
    <main className= 'relative  w-screen overflow-x-hidden'>
      <Navbar/>
      <Loading/>
      <Hero/>
      <About/>
      <Valorent/>
       {/* <Features/> */}
      <Story/>
       <Contact />
      <Footer /> 
      
     
      
    </main>
  );
}
