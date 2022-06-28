import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Index from "./pages/index";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import browser from "./utils/browser";


function App() {
  const equipmentType = browser();
  const { isMobile } = equipmentType.version;
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index  element={<Index isMobile={isMobile} />} />
        <Route path="index"  element={<Index isMobile={isMobile} />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product isMobile={isMobile} />} />
      </Route>
    </Routes>
  );
}

export default App;
