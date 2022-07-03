import "./Header.scss";
import { useNavigate } from "react-router-dom";

interface HeaderProp {
  isTransparent?: boolean;
  bgColor?: string;
}

function Header(props: HeaderProp) {
  const { isTransparent, bgColor } = props;
  const navigateTo = useNavigate();

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
        <div className="banner-item">首页</div>
        <div
          className="banner-item"
          onClick={() => {
            navigateTo("about");
          }}
        >
          关于我们
        </div>
        <div className="banner-item">加入我们</div>
        <div
          className="banner-item"
          onClick={() => {
            navigateTo("product");
          }}
        >
          产品详情
        </div>
        <div className="banner-item">青柚人</div>
        <div className="banner-item">青柚博客</div>
      </div>
    </div>
  );
}

export default Header;
