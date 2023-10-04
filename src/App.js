import { About } from "./components/about/About";
import { Hero } from "./components/hero/Hero";
import { Highlights } from "./components/highlights/Highlights";
import { Navbar } from "./components/navbar/Navbar";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
