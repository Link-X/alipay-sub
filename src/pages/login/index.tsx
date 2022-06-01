import React, { useCallback } from "react";
import { AtButton } from "taro-ui";

import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { useLogin, useGetInfo } from "@/public/user-miniprogram/hooks";
import { useToast } from "taro-hooks";
// import {} from 'taro-hooks'

import "./index.less";

const Login = () => {
  const { getCode } = useLogin();
  const { options } = useGetInfo();

  return (
    <View className="login">
      <AtButton
        onClick={async () => {
          const code: string = await getCode();
          console.log(code);
        }}
      >
        获取登陆coee
      </AtButton>
      <Button {...options}>获取个人信息</Button>
    </View>
  );
};

export default Login;
