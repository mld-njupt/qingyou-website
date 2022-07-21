/**
 * 
 * @param colorValue 背景颜色值
 * @returns 适合的文字颜色值
 */
export function findTextColor(colorValue:string) {
    // #123456或者rgb(12,34,56)转为rgb数组[12,34,56]
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var that = colorValue;
    if (/^(rgb|RGB)/.test(that)) {
        // 处理rgb转为数组
        var aColor = that.replace(/(?:\(|\)|rgba|RGB)*/g, "").split(",");
        // console.log(aColor.slice(0,3))
        return resBgColor(aColor.slice(0,3));
    } else if (reg.test(that)) {
        // 处理十六进制色值
        var sColor = colorValue.toLowerCase();
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return resBgColor(sColorChange);
        } else {
            return false;
        }
    } else {
        return false;
    }
}

  /**
 * 转换字体颜色
 * 
 * @param {array} rgbArr rgb数组
 */
export function resBgColor(rgbArr: any) {
    // 当color值大于128时,color值偏向255,即#ffffff,此时字体颜色应为黑色
    // 当color值小于128时,color值偏向0,即#000000,此时字体颜色应为白色
    var color = 0.213 * rgbArr[0] + 0.715 * rgbArr[1] + 0.072 * rgbArr[2] > 255 / 2;
    return color ? '#4a4a4a' : '#ffffff'
  }
