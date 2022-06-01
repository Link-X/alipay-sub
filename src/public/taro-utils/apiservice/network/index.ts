import Taro from "@tarojs/taro";

export const tarorequest = (payload) => {
  return Taro.request(payload);
};

export const uploadFile = (payload) => {
  return Taro.uploadFile(payload);
};

export const downloadFile = (payload) => {
  if (process.env.TARO_ENV != "h5") {
    return Taro.downloadFile(payload);
  } else {
    console.log("另外想办法");
  }
};
