import React from "react";
import Header from "../../components/Header/Header";
import Swiper from "../../components/Swiper/Swiper";
import ProductPart from "./components/ProductPart/ProductPart";

import youkexingBackground from '../../assets/products/background/youkexing.png'
import youkexingCode from '../../assets/products/code/youkexing.png'
import youkexingIcon from '../../assets/products/icon/youkexing.png'
import youkexingMock from '../../assets/products/mock/youkexing.png'

const products = [
  {
    iconUrl:
      youkexingIcon,
    title: "邮客行",
    detail:
      "“邮客行｜南邮访客登记”小程序是一款线上入校访客登记系统。疫情防控形势较为严峻复杂，来校访客登记需纳入高校常规化管理范畴。“邮客行”联合企业微信和微信两个平台，实现了入校访客在微信端申请，校内管理人员在企业微信端审批的功能。",
    bgUrl:
      youkexingBackground,
    mockUrl: youkexingMock,
    qrCode: youkexingCode,
  },
];

interface ProductProp {
  isMobile: boolean;
}
function Product(props: ProductProp) {
  const { isMobile } = props;
  return (
    <>
      {/* {isMobile ? null : <Header isTransparent={true}></Header>} */}
      {isMobile ? (
        <Swiper isMobile={true}>
          {/* <FreeGate></FreeGate>
          <FreeGate></FreeGate> */}
        </Swiper>
      ) : (
        <Swiper productIndicatorOptions={products}>
          {products.map((value, index) => {
            return (
              <ProductPart
                key={index}
                iconUrl={value.iconUrl}
                bgUrl={value.bgUrl}
                title={value.title}
                detail={value.detail}
                mock={value.mockUrl}
                qrCode={value.qrCode}
              ></ProductPart>
            );
          })}
        </Swiper>
      )}
    </>
  );
}

export default Product;
