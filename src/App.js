import { About } from "./components/about/About";
import { Hero } from "./components/hero/Hero";
import { Highlights } from "./components/highlights/Highlights";
import { Navbar } from "./components/navbar/Navbar";
import { Testimonials } from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

export default App;
