import React, { useEffect } from "react";
import { useMeasure } from "react-use";
import { useCycle } from "../../../../utils/customHooks";
import "./Part2.scss";

const assets = [
  "https://game.gtimg.cn/images/game/web202112/img/p3-img4.38cb954.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img1.40720a3.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img5.e92e4f7.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img3.288862c.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img2.494b509.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img4.38cb954.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img1.40720a3.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img5.e92e4f7.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img3.288862c.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img2.494b509.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img4.38cb954.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img1.40720a3.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img5.e92e4f7.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img3.288862c.jpg",
  "https://game.gtimg.cn/images/game/web202112/img/p3-img2.494b509.jpg",
];

function Part2() {
  const [index, nextIndex, backIndex] = useCycle(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    // 12,
    // 13,
    // 14,
    0
  );
  const itemWidth = {
    0: 0,
    1: 34,
    2: 129,
    3: 165,
    4: 200,
    5: 236,
    6: 272,
    7: 367,
    8: 402,
    9: 440,
    10: 475,
    11: 510,
  };
  useEffect(() => {
    console.log(index);
  }, [index]);
  return (
    <div className="part2-wrap container">
      <div className="content-wrap">
        <div className="title-wrap">
          <p>青柚产品</p>
          <div className="title">所有点滴坚守积攒的力量，都会被看到</div>
        </div>
        <div className="carousel-wrap">
          <div
            className="carousel-content"
            style={{
              transform: `translate3d(-${
                itemWidth[index as 1]
              }vh, 0px, 0px)`,
            }}
          >
            {assets.map((value, i) => {
              return (
                <div
                  key={i}
                  className={
                    i !== index
                      ? `carousel-item carousel-item${i + 1} `
                      : `carousel-item carousel-item${i + 1} carousel-active`
                  }
                >
                  <img
                    src={value}
                    alt=""
                    className={
                      i !== index
                        ? `item-image item-image${i + 1} `
                        : `item-image item-image${i + 1} item-image-active`
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className="carousel-pagination-wrap">
            <div
              className="carousel-pagination-back"
              onClick={() => {
                backIndex();
              }}
            ></div>
            <div className="carousel-pagination">
              <span className="carousel-index">{index + 1}</span>/
              <span className="carousel-total">5</span>
            </div>
            <div
              className="carousel-pagination-next"
              onClick={() => {
                nextIndex();
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part2;
