import React, { useState } from "react";
import "./Part5.scss";
const assets = [
  {
    url: "https://shp.qpic.cn/cfwebcap/0/70120d7bb197d3eabb9785095f8e307f/0/?width=285&height=240",
    title: "前端",
    msg: "前端",
  },
  {
    url: "https://shp.qpic.cn/cfwebcap/0/b726d172e7465ce71845d874d35acd04/0/?width=285&height=240",
    title: "前端",
    msg: "后端",
  },
  {
    url: "https://shp.qpic.cn/cfwebcap/0/04fb0a5851994e30863c57f33cc8f629/0/?width=285&height=240",
    title: "前端",
    msg: "运维",
  },
  {
    url: "https://shp.qpic.cn/cfwebcap/0/ed2bfe3dfc05dd1bd17c13099212d115/0/?width=285&height=240",
    title: "前端",
    msg: "运营",
  },
];
const text = [
  { url: "", content: "联系我们：qingyou@njupt.edu.cn" },
  { url: "", content: "欢迎前往大学生活动中心2楼，与我们线下交流。" },
  { url: "", content: "Copyright © 2021 Qingyou Studio. 保留所有权利。" },
  {
    url: "https://qingyou.njupt.edu.cn/static/media/beian.d0289dc0.png",
    content:
      "苏公网安备 32011302321076号 | 苏ICP备2020064604号 | 苏公网安备32011302320419号 | 苏ICP备11073489号-1",
  },
];
function Part5() {
  const [index, setIndex] = useState(0);
  const selectIndex = (index: number) => {
    return () => {
      setIndex(index);
    };
  };
  return (
    <div className="part5-wrap container">
      <div className="content-wrap">
        <div className="title-wrap">
          <p>加入我们</p>
          <div className="title">
            时代里的每个高光时刻，都由无数坚守的身影所铸就
          </div>
        </div>
        <div className="work-list">
          {assets.map((item, i) => {
            return (
              <div key={i} className="list-item" onClick={selectIndex(i)}>
                <img
                  src={item.url}
                  alt=""
                  className={i === index ? "item-image-active" : ""}
                />
                <div
                  className={
                    i === index
                      ? "item-content-active item-content"
                      : "item-content"
                  }
                >
                  <div className="item-title">{item.title}</div>
                  <div className="item-msg">{item.msg}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer-wrap">
          <div className="qy-logo-wrap">
            <div className="qy-logo"></div>
            <div className="qy-slogan">用热爱创造无限可能</div>
          </div>
          <div className="qy-code"></div>
          <div className="qy-msg">
            {text.map((value, index) => {
              return (
                <div className="msg-item" key={index}>
                  {!!value.url ? <img src={value.url} alt=""></img> : null}
                  <p>{value.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part5;
