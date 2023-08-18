import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
const App = () => {
  return (
    <div className=" h-screen">
      <BrowserRouter>
        <Navbar />
        <Hero />
      </BrowserRouter>
    </div>
  );
};

export default App;
