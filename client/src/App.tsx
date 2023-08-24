import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import ProductSection from "./components/product/ProductSection";
const App = () => {
  return (
    <div className=" h-screen">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <ProductSection />
      </BrowserRouter>
    </div>
  );
};

export default App;
