import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Index from "./pages/index";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useWindowSize } from "react-use";
import "antd/dist/antd.css";
import { useEffect } from "react";

function App() {
  const { width, height } = useWindowSize();
  function rizeView() {
    //@ts-ignore
    document.body.style.zoom = "normal"; //避免zoom尺寸叠加
    let scale = document.body.clientHeight / 900;
    const containers = document.querySelectorAll(".container");
    [].forEach.call(containers, function (item) {
      //@ts-ignore
      item.style.zoom = scale;
    });
  }
  useEffect(() => {
    window.addEventListener(
      "resize",
      function () {
        rizeView();
      },
      false
    );
    return ()=>{
      window.removeEventListener('resize',()=>{
        
      })
    }
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={<Home isMobile={width / height > 0.8 ? false : true} />}
      >
        <Route
          index
          element={
            <Index
              isMobile={width / height > 0.8 ? false : true}
              width={width}
            />
          }
        />
        <Route
          path="index"
          element={
            <Index
              isMobile={width / height > 0.8 ? false : true}
              width={width}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route
          path="product"
          element={<Product isMobile={width / height > 0.8 ? false : true} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
