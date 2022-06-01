import Taro, { login, checkSession } from "@tarojs/taro";
import { useCallback, useState } from "react";

import { isAlipay, isWeapp } from "@/public/taro-utils/methods";

export default (props?: any) => {
  const weappLogin = (resovle, reject) => {
    Taro.login({
      success(res) {
        if (res.code) {
          resovle(res);
        } else {
          console.log("登录失败！" + res.errMsg);
          reject(res);
        }
      },
    });
  };

  const alipayLogin = (resovle, reject) => {
    my.getAuthCode({
      scopes: ["auth_user"],
      success: (res) => {
        resovle({
          code: res.authCode,
          authSuccessScopes: res.authSuccessScopes,
        });
      },
      fail: (err) => {
        reject({
          errMsg: err.authErrorScopes,
        });
      },
    });
  };

  const getCode = useCallback(() => {
    return new Promise((resovle, reject) => {
      if (isWeapp) {
        weappLogin(resovle, reject);
      }
      if (isAlipay) {
        alipayLogin(resovle, reject);
      }
    });
  }, []);

  return { getCode };
};
