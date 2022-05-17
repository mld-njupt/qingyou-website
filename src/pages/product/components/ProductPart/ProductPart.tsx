import React from "react";
import "./ProductPart.scss";
interface PartProp {
  iconUrl: string;
  title: string;
  detail: string;
  bgUrl: string;
}
function ProductPart(props: PartProp) {
  const { iconUrl, title, detail, bgUrl } = props;
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
      </div>
    </div>
  );
}

export default ProductPart;
