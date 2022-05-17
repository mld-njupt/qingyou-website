import React from "react";
import Header from "../../components/Header/Header";
import Swiper from "../../components/Swiper/Swiper";
import ProductPart from "./components/ProductPart/ProductPart";
const products = [
  {
    iconUrl:
      "https://p6-bd-official.byteimg.com/img/bytedance-cn/4ac74bbefc4455d0b350fff1fcd530c7~noop.image",
    title: "今日头条",
    detail:
      "今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，帮助用户看见更大的世界。今日头条目前拥有推荐引擎、搜索引擎、关注订阅和内容运营等多种分发方式，囊括图文、视频、问答、微头条、专栏、小说、直播、音频和小程序等多种内容体裁，并涵盖科技、体育、健康、美食、教育、三农、国风等超过100个内容领域。",
    bgUrl:
      "https://p9-bd-official.byteimg.com/img/bytedance-cn/dd665e447cd09c339875f9580a5478bd~noop.image",
  },
  {
    iconUrl:
      "https://p6-bd-official.byteimg.com/img/bytedance-cn/4ac74bbefc4455d0b350fff1fcd530c7~noop.image",
    title: "今日头条",
    detail:
      "今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，帮助用户看见更大的世界。今日头条目前拥有推荐引擎、搜索引擎、关注订阅和内容运营等多种分发方式，囊括图文、视频、问答、微头条、专栏、小说、直播、音频和小程序等多种内容体裁，并涵盖科技、体育、健康、美食、教育、三农、国风等超过100个内容领域。",
    bgUrl:
      "https://p9-bd-official.byteimg.com/img/bytedance-cn/dd665e447cd09c339875f9580a5478bd~noop.image",
  },
  {
    iconUrl:
      "https://p6-bd-official.byteimg.com/img/bytedance-cn/4ac74bbefc4455d0b350fff1fcd530c7~noop.image",
    title: "今日头条",
    detail:
      "今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，帮助用户看见更大的世界。今日头条目前拥有推荐引擎、搜索引擎、关注订阅和内容运营等多种分发方式，囊括图文、视频、问答、微头条、专栏、小说、直播、音频和小程序等多种内容体裁，并涵盖科技、体育、健康、美食、教育、三农、国风等超过100个内容领域。",
    bgUrl:
      "https://p9-bd-official.byteimg.com/img/bytedance-cn/dd665e447cd09c339875f9580a5478bd~noop.image",
  },
  {
    iconUrl:
      "https://p6-bd-official.byteimg.com/img/bytedance-cn/4ac74bbefc4455d0b350fff1fcd530c7~noop.image",
    title: "今日头条",
    detail:
      "今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，帮助用户看见更大的世界。今日头条目前拥有推荐引擎、搜索引擎、关注订阅和内容运营等多种分发方式，囊括图文、视频、问答、微头条、专栏、小说、直播、音频和小程序等多种内容体裁，并涵盖科技、体育、健康、美食、教育、三农、国风等超过100个内容领域。",
    bgUrl:
      "https://p9-bd-official.byteimg.com/img/bytedance-cn/dd665e447cd09c339875f9580a5478bd~noop.image",
  },
  {
    iconUrl:
      "https://p6-bd-official.byteimg.com/img/bytedance-cn/4ac74bbefc4455d0b350fff1fcd530c7~noop.image",
    title: "今日头条",
    detail:
      "今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，帮助用户看见更大的世界。今日头条目前拥有推荐引擎、搜索引擎、关注订阅和内容运营等多种分发方式，囊括图文、视频、问答、微头条、专栏、小说、直播、音频和小程序等多种内容体裁，并涵盖科技、体育、健康、美食、教育、三农、国风等超过100个内容领域。",
    bgUrl:
      "https://p9-bd-official.byteimg.com/img/bytedance-cn/dd665e447cd09c339875f9580a5478bd~noop.image",
  },
];
interface ProductProp {
  isMobile: boolean;
}
function Product(props: ProductProp) {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? null : <Header isTransparent={true}></Header>}
      {isMobile ? (
        <Swiper isMobile={true}>
          {/* <FreeGate></FreeGate>
          <FreeGate></FreeGate> */}
        </Swiper>
      ) : (
        <Swiper productIndicatorOptions={products}>
          {products.map((value, index) => {
            return (
              <ProductPart
                key={index}
                iconUrl={value.iconUrl}
                bgUrl={value.bgUrl}
                title={value.title}
                detail={value.detail}
              ></ProductPart>
            );
          })}
        </Swiper>
      )}
    </>
  );
}

export default Product;
