import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TechnologySection from "./components/technologysection";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechnologySection />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    </>
  );
}

export default App;
