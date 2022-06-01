import Taro, { login, checkSession } from "@tarojs/taro";
import { useCallback, useState } from "react";

import { isAlipay, isWeapp } from "@/public/taro-utils/methods";

export default (props?: any) => {
  const weappLogin = useCallback(async (event) => {
    /** 小程序登录 */
    if (event && event.detail && event.detail.errMsg) {
      if (event.detail.errMsg.indexOf("ok") !== -1) {
        try {
          console.log(event.detail);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, []);

  const alipayLogin = useCallback(async () => {
    try {
      const code = await Taro.getOpenUserInfo();
      console.log(code);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const [options] = useState({
    openType: isAlipay ? "getAuthorize" : "getUserInfo",
    onGetAuthorize: alipayLogin,
    onGetUserInfo: weappLogin,
    scope: "userInfo",
  });

  return { options };
};
