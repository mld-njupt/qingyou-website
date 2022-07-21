import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { findTextColor } from "../../utils/textcolor";

interface HeaderProp {
  isTransparent?: boolean;
  bgColor?: string;
  isLinear?: boolean;
}

function Header(props: HeaderProp) {
  const { isTransparent, bgColor, isLinear } = props;
  const [dynamicBgColor, setDynamicBgColor] = useState('rgba(255, 255, 255, 0)')
  const navigateTo = useNavigate();
  useEffect(() => {
    // console.log(props.bgColor)
    setTimeout(() => { setDynamicBgColor(`${props.bgColor}`) }, 250)
  }, [props.bgColor])
  const headerBackgroundStyle = () => {
    if (isTransparent && bgColor) {
      return { backgroundColor: `rgba(255, 255, 255, 0)` }
    } else if (isLinear && bgColor) {
      // console.log('here')
      // console.log(findTextColor(dynamicBgColor))
      return { background: `linear-gradient(180deg, ${dynamicBgColor} 73.96%, rgba(255, 255, 255, 0) 100%)` }
    } else { return {} }
  }

  return (
    <div
      style={
        headerBackgroundStyle()
      }
      className="header-wrap"
    >
      <div className="header-body">
        <div className="header-icon"></div>
        <div className="header-banner" style={{ color: `${findTextColor(dynamicBgColor)}` }}>
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
    </div>
  );
}

export default Header;
