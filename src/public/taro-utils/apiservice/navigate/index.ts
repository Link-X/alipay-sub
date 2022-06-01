/**
 * 处理不同平台的api之间的差异
 * process.env.TARO_ENV
 * 用于判断当前编译类型，目前有 weapp / swan / alipay / h5 / rn 五个取值
 * */
import Taro from "@tarojs/taro";

export const navigateTo = (payload) => {
  return Taro.navigateTo(payload);
};

export const redirectTo = (payload) => {
  return Taro.redirectTo(payload);
};

export const switchTab = (payload) => {
  if (process.env.TARO_ENV != "h5") {
    return Taro.switchTab(payload);
  } else {
    // return Taro.navigateTo(payload)
    return Taro.switchTab(payload);
  }
};

export const navigateBack = (payload) => {
  return Taro.navigateBack(payload);
};

export const reLaunch = (payload) => {
  if (process.env.TARO_ENV != "h5") {
    return Taro.reLaunch(payload);
  } else {
    return Taro.navigateTo(payload);
  }
};

export const navigateToMiniProgram = (payload) => {
  if (process.env.TARO_ENV != "rn" && process.env.TARO_ENV != "h5") {
    return Taro.navigateToMiniProgram(payload);
  } else {
  }
};

export const getCurrentPagesFn = () => {
  if (process.env.TARO_ENV != "h5" && process.env.TARO_ENV != "alipay") {
    return Taro.getCurrentPages();
  } else {
    // h5 没法获取历史记录，所以只能返回当前页面
    const hash = window.location.hash.substr(1);
    if (hash) {
      const pramsIndex = hash.indexOf("?");
      const lasIndex = pramsIndex !== -1 ? hash.indexOf("?") : hash.length;
      return [{ route: hash.substr(1, lasIndex - 1) }];
    }
    return [];
  }
};

export const returnToIndexPage = () => {
  switchTab({
    url: "/pages/home-page/index",
  });
};
