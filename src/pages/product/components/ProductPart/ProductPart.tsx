import React, { Fragment } from "react";
import "./ProductPart.scss";
interface PartProp {
  iconUrl: string;
  title: string;
  detail: string;
  bgUrl: string;
  mock: string;
  qrCode?: string;
}
function ProductPart(props: PartProp) {
  const { iconUrl, title, detail, bgUrl, mock, qrCode } = props;
  const ProductQrCode = () => {
    if (qrCode !== null) {
      return (
        <div className="product-part-qrcode">
          <img src={qrCode} alt='qrcode' height='120px' />
          <div style={{textAlign:'center',width:'120px',marginTop:'20px'}}>
          <div>扫一扫</div>
          <div>马上体验</div>
          </div>
        </div>
      )
    } else { return <></> }
  }
  return (
    <div
      className="product-part-wrap"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div className="product-part-msg">
        <div
          className="product-part-icon"
          style={{
            backgroundImage: `url(${iconUrl})`,
          }}
        ></div>
        <div className="product-part-title">{title}</div>
        <p className="product-part-detail">{detail}</p>
        <ProductQrCode />
      </div>
      <div className="product-part-mock"><img src={mock} alt="mock" height='100%' /></div>
    </div>
  );
}

export default ProductPart;
