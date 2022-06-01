export default {
  pages: ["pages/index/index", "pages/login/index"],
  subpackages: [
    {
      root: "subpackages/manage",
      pages: ["test-page/index"],
    }
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  }
};
