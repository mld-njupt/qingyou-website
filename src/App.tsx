import About from "./pages/about";
import Layout from "./pages/index";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import browser from "./utils/browser";

function App() {
  const equipmentType = browser();
  const { isMobile } = equipmentType.version;
  return (
    <Routes>
      <Route index element={<Layout isMobile={isMobile} />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
