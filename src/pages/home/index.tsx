import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
function Home() {
  return (
    <div className="home-wrap">
      <Header></Header>
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
