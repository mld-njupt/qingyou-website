import React from "react";
import { Carousel } from "antd";
import "./Part4.scss";

const assets = [
  "https://shp.qpic.cn/cfwebcap/0/1d1fcb1d8ec5927fd7e35617fd277649/0/?width=640&height=363",
  "https://shp.qpic.cn/cfwebcap/0/164c5cd4ecf14f2b9451667668cdce3d/0/?width=640&height=363",
  "https://shp.qpic.cn/cfwebcap/0/f32742efd30e624fb2084fe1d225db25/0/?width=640&height=363",
  "https://shp.qpic.cn/cfwebcap/0/633f4e24e23b1f3f6f1b6731148e84ce/0/?width=640&height=363",
  "https://shp.qpic.cn/cfwebcap/0/b36a312ddc1b48d043e4033284d41c52/0/?width=640&height=363",
];
const newsList = [
  "【天刀×芙蓉镇】“天衣别院”落户湖南，打造沉浸式旅游体验",
  "【天刀×芙蓉镇】“天衣别院”落户湖南，打造沉浸式旅游体验",
  "【天刀×芙蓉镇】“天衣别院”落户湖南，打造沉浸式旅游体验",
  "【天刀×芙蓉镇】“天衣别院”落户湖南，打造沉浸式旅游体验",
  "【天刀×芙蓉镇】“天衣别院”落户湖南，打造沉浸式旅游体验",
  "【天刀×芙蓉镇】“天衣别院”落户湖南，打造沉浸式旅游体验",
  "【天刀×芙蓉镇】“天衣别院”落户湖南，打造沉浸式旅游体验",
];
function Part4() {
  return (
    <div className="part4-wrap container">
      <div className="content-wrap">
        <div className="title-wrap">
          <p>青柚事</p>
          <div className="title">所有点滴坚守积攒的力量，都会被看到</div>
        </div>
        <div className="bottom-wrap">
          <div className="carousel-wrap">
            <Carousel className="carousel">
              {assets.map((url, index) => {
                return (
                  <img
                    key={index}
                    src={url}
                    alt=""
                    // width={"100%"}
                    // height={"100%"}
                  />
                );
              })}
            </Carousel>
          </div>
          <div className="news-wrap">
            {
              newsList.map((content,index)=>{
                return (
                  <a href="#">{content}</a>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part4;
