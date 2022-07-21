import React, {
  MouseEventHandler,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import throttle from "../../utils/throttle";
import "./Swiper.scss";
interface ContextProp {
  selectedIndex: number;
  setSelectedIndex: Function;
}
interface SwiperProp {
  //用来配置不同样式的指示器
  productIndicatorOptions?: Array<{ iconUrl: string }>;
  isMobile?: boolean;
  children: ReactElement | Array<ReactElement>;
  indexControl?: any
}
const swiperContext = React.createContext<ContextProp>({
  selectedIndex: 0,
  setSelectedIndex: () => { },
});
function IndicatorItem(props: {
  onClick: Function;
  selected: boolean;
  bg?: string;
}) {
  const { onClick, selected, bg } = props;
  return (
    <div
      onClick={onClick as MouseEventHandler<HTMLDivElement>}
      className={
        bg
          ? selected
            ? "product-indicator-item  product-selected-item"
            : "product-indicator-item"
          : selected
            ? "indicator-item selected-item"
            : "indicator-item"
      }
      style={{ backgroundImage: `url(${bg})` }}
    ></div>
  );
}
function Indicator(props: { children: ReactElement | Array<ReactElement> }) {
  return <div className="indicator-wrap">{props.children}</div>;
}
//移动端指示器
function MobileIndicator(props: {
  arrowClick: Function;
  isLast: boolean;
  resetClick: Function;
}) {
  const { arrowClick, isLast, resetClick } = props;
  return isLast ? (
    <div
      onClick={resetClick as MouseEventHandler<HTMLDivElement>}
      className="reset"
    >
      回到首页
    </div>
  ) : (
    <div
      onClick={arrowClick as MouseEventHandler<HTMLDivElement>}
      className={isLast ? "next hide" : "next"}
    ></div>
  );
}
function Swiper(props: SwiperProp) {
  const { children, isMobile, productIndicatorOptions, indexControl } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsCount = React.Children.count(children);
  const itemsArray = new Array(itemsCount).fill("");

  //适配移动端
  let offsetTop = 0;
  let startTouch = 0;
  const touchStartHandler = (e: any) => {
    offsetTop = e.touches[0].clientY;
    startTouch = Date.now();
  };
  const touchMoveHandler = (e: any) => e.preventDefault();
  const touchEndHandler = (e: any) => {
    const deltaY = e.changedTouches[0].clientY - offsetTop;
    const deltaTime = Date.now() - startTouch;
    if (Math.abs(deltaY) > 50 || (deltaTime < 150 && Math.abs(deltaY) > 50)) {
      setSelectedIndex((lastPositionIndex) => {
        const newPositionIndex = Math.min(
          Math.max(lastPositionIndex + (deltaY <= 0 ? 1 : -1), 0),
          itemsCount - 1
        );
        return newPositionIndex;
      });
    }
  };
  const arrowClickHandler = () => {
    throttle(() => {
      setSelectedIndex((prev) => {
        const newPositionIndex = Math.min(prev + 1, itemsCount - 1);
        return newPositionIndex;
      });
    });
  };
  const resetPositionIndex = () => {
    setSelectedIndex(0);
  };
  //注册鼠标滚轮事件处理
  const wheelHandler = (e: { deltaY: number }) => {
    throttle(() => {
      setSelectedIndex((lastPositionIndex) => {
        const deltaY = -e.deltaY;
        const newPositionIndex = Math.min(
          Math.max(lastPositionIndex + (deltaY <= 0 ? 1 : -1), 0),
          itemsCount - 1
        );
        return newPositionIndex;
      });
    });
  };
  const context = useMemo(
    () => ({ selectedIndex, setSelectedIndex }),
    [selectedIndex, setSelectedIndex]
  );
  useEffect(() => {
    const { current } = containerRef;
    if (itemsCount && current) {
      current.addEventListener("touchstart", touchStartHandler);
      current.addEventListener("touchmove", touchMoveHandler);
      current.addEventListener("touchend", touchEndHandler);
      current.addEventListener("wheel", wheelHandler);
      return () => {
        current.removeEventListener("touchstart", touchStartHandler);
        current.removeEventListener("touchmove", touchMoveHandler);
        current.removeEventListener("touchend", touchEndHandler);
        current.removeEventListener("wheel", wheelHandler);
      };
    }
  });
  useEffect(() => {
    console.log('index change to '+selectedIndex)
    indexControl(selectedIndex)
  }, [selectedIndex])
  return (
    <div className="swiper-wrap" ref={containerRef}>
      <swiperContext.Provider value={context}>
        <div
          className="swiper-content"
          style={{
            transform: `translate3d(0px, -${100 * selectedIndex}vh, 0px)`,
          }}
        // animate={{
        //   y: `-${100 * selectedIndex}vh`,
        //   transition: {
        //     type: "spring",
        //     stiffness: 300,
        //     damping: 30,
        //   },
        // }}
        >
          {React.Children.map(children, (child) => {
            return React.cloneElement(child);
          })}
        </div>
        {isMobile ? (
          <MobileIndicator
            isLast={itemsCount - 1 === selectedIndex}
            resetClick={resetPositionIndex}
            arrowClick={arrowClickHandler}
          ></MobileIndicator>
        ) : (
          <Indicator>
            {itemsArray.map((_, index) => {
              return (
                <IndicatorItem
                  key={index}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  selected={index === context.selectedIndex}
                  bg={
                    productIndicatorOptions &&
                    productIndicatorOptions[index].iconUrl
                  }
                ></IndicatorItem>
              );
            })}
          </Indicator>
        )}
      </swiperContext.Provider>
    </div>
  );
}

export default Swiper;
