import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import MobileHeader from "../../components/Header/MobileHeader";
interface HomeProp{
  isMobile:boolean
}
function Home(props:HomeProp) {
  return (
    // {isMobile ? null : <Header isTransparent={true}></Header>}
    <div className="home-wrap">
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
        className="content"
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Home;
