import React from "react";
import "./Header.scss"
interface HeaderProp {
  isTransparent?: boolean;
  bgColor?: string;
}
function Header(props: HeaderProp) {
  const { isTransparent, bgColor } = props;
  return (
    <div
      style={
        isTransparent && bgColor
          ? {
              backgroundColor: `${bgColor}`,
            }
          : undefined
      }
      className="header-wrap"
    >
      <div className="header-icon"></div>
      <div className="header-banner">
        <div className="banner-item">关于我们</div>
        <div className="banner-item">游戏介绍</div>
        <div className="banner-item">品牌活动</div>
      </div>
    </div>
  );
}

export default Header;
