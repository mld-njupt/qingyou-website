import React from "react";
import Header from "../../components/Header/Header";
import Swiper from "../../components/Swiper/Swiper";
import FreeGate from "./components/FreeGate/FreeGate";
import Visitor from "./components/Visitor/Visitor";
interface ProductProp {
  isMobile: boolean;
}
function Product(props: ProductProp) {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? null : <Header isTransparent={true}></Header>}
      {isMobile ? (
        <Swiper isMobile={true}>
          <FreeGate></FreeGate>
          <FreeGate></FreeGate>
        </Swiper>
      ) : (
        <Swiper>
          <FreeGate></FreeGate>
          <FreeGate></FreeGate>
        </Swiper>
      )}
    </>
  );
}

export default Product;
