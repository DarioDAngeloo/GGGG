import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShopingProvider } from "./context/Shoping";

function App() {
  return (
    <div className="App h-screen bg-plane bg-[#b8c1ec]">
      <ShopingProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ShopingProvider>
    </div>
  );
}

export default App;
