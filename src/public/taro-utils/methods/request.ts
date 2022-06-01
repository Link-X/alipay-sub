// import { request } from "@tarojs/taro/types";
import { isDev } from "./global-env";
import { navigateTo, tarorequest } from "../apiservice";

import globaldata from "../configuration/globaldata.json";

const ENVAPI = globaldata.ENVAPI;
const dontLogin = [];

const { DEV, PROD, TEST } = ENVAPI;

const getRequestUrl = (path) => {
  const baseUrl = isDev ? DEV : PROD;
  return `${baseUrl}${path}`;
};

const errCallback = {
  403() {},
  401() {},
  notNumber(data) {},
  init(code, data) {
    if (code === 0) {
      return false;
    }
    const func = this[code] ? this[code] : this.notNumber;
    try {
      func(data);
      return true;
    } catch (err) {}
  },
};

const request = <T = any, U = any>(
  url: string,
  options: Taro.request.Option<T, U>
): Promise<T> => {
  const urlFormat = getRequestUrl(url);
  options.header = options.header || {};

  return new Promise(async (resolve, reject) => {
    const res = await tarorequest({
      ...options,
      url: urlFormat,
    });
    const data = (res && res.data) || {};
    const code = res && res.data && res.data.code;
    const paramete: T = (data && data.data) || {};
    if (!errCallback.init(code, data)) {
      resolve(paramete);
      return;
    }
    reject(res);
  });
};

interface httpType {
  [key: string]: <T = any, U = any>(
    url: string,
    options?: Taro.request.Option<T, U>
  ) => Promise<T>;
}

const postInit = (options) => {
  return {
    ...{ method: "post", header: { "content-type": "application/json" } },
    ...(options || {}),
  };
};

export const HTTP: httpType = {
  get(url, options) {
    const opt: any = { ...{ method: "GET", header: {} }, ...(options || {}) };
    return request(url, opt);
  },
  post(url, options) {
    return request(url, postInit(options));
  },
};
