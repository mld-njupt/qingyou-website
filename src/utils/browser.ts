const browser = function () {
  const ua = navigator.userAgent;
  const version = {
    isIos: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios 终端
    //isMobile: !!ua.macth(/(iPhone|iPod|iPad|Android|ios)/i), // 是否移动终端
    isMobile: !!ua.match(/AppleWebKit.*Mobile.*/), // 是否移动终端
    isAndroid: ua.indexOf("Android") > -1 || ua.indexOf("Linux") > -1, // android 终端端或者uc 浏览器
    // isAndroid: !!appVersion.match(/android/gi),
    isIphone: ua.indexOf("iPhone") > -1, // 是否为iPhone或则QQHD浏览器
    // isIphone:  !!appVersion.match(/iphone/gi);
    iPad: ua.indexOf("iPad") > -1, // 是否是iPad
    isWebApp: ua.indexOf("Safari") === -1, // 是否为Webapp，没有头部和底部
    isTrident: ua.indexOf("Trident") > -1, //IE内核
    isPresto: ua.indexOf("Presto") > -1, // opera 内核
    isWebKit: ua.indexOf("AppleWebkit") > -1, // 苹果谷歌内核
    isGecko: ua.indexOf("Gecko") > -1 && ua.indexOf("KHTML") === -1, //火狐内核
    isWechat: !!ua.match(/micromessenger/gi),
    isWeiBo: !!ua.match(/weibo/gi),
    isQQ: !!ua.match(/qq/gi),
  };
  const language = navigator.language.toLowerCase();
  return {
    version,
    language,
  };
};
export default browser;
