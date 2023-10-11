import { About } from "./components/about/About";
import { Highlights } from "./components/highlights/Highlights";
import { Navbar } from "./components/navbar/Navbar";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Footer } from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
