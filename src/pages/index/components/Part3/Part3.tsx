import React, { useState } from "react";
import { People } from "./people";
import n1 from "../../../../assets/word/Home/n1.png";
import n2 from "../../../../assets/word/Home/n2.png";
import t3 from "../../../../assets/word/Home/t3.png";
import "./Part3.scss";
interface Part3Prop{
  clientWidth:number
}
function Part3(props:Part3Prop) {
  const [people, randomSort] = useState(People);
  const handleClick = () => {
    const afterSort = people.sort(() => 0.5 - Math.random());
    randomSort([...afterSort]);
  };

  const setClassName = (index: number) => {
    let className = "";
    switch (index) {
      case 0:
      case 3:
      case 10:
      case 11:
      case 12:
      case 16:
      case 20:
        className = "item opacity";
        break;
      case 7:
        className = "item-main";
        break;
      default:
        className = "item";
        break;
    }
    return className;
  };

  return (
    <div className="part3-wrap">
      <div className="part3-container">
        <div className="left-container">
          <div className="title">
            <img src={t3} alt="" />
          </div>
          <div className="content">
            <p>
              从一开始的几人团队到现在五十多人的工作室，青柚工作室吸引并欢迎越来越多志同道合的朋友们加入。
            </p>
            <p>
              在这个团队里，大家讨论、交流、学习、进步、共事...写你感兴趣的项目，为期末报告单设计UI，策划你喜欢的用户交流活动，平时再水水群、聊聊天，如果恰好赶上了秋招还能蹭上学长学姐们一顿又一顿的offer饭。
            </p>
            <p>成长和进步是一局团战，要和得力的队友一起打！</p>
          </div>
          <div className="people-num">
            <div className="num-item">
              <div className="num">
                <img src={n1} alt="" />
              </div>
              <div className="tag">工作室成员数</div>
            </div>
            <div className="num-item">
              <div className="num">
                <img src={n2} alt="" />
              </div>
              <div className="tag">毕业成员数</div>
            </div>
          </div>
          <button className="join">加入青柚</button>
        </div>
        <div className="right-container">
          <div className="photo-wall">
            {people.map((person, index) => {
              if (index >= 21) return "";
              const { id, img } = person;
              return (
                <div
                  className={setClassName(index)}
                  key={id}
                >
                  <img src={img} alt="" />
                </div>
              );
            })}
          </div>
          <div className="random" onClick={handleClick}>
            随机换一拨
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part3;
