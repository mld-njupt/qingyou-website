import About from "./pages/about";
import Layout from "./pages/index";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrap">
      <Routes>
        <Route index element={<Layout />}/>
        <Route path="about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
