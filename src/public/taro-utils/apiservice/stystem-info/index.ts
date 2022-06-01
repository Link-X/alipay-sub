import Taro from '@tarojs/taro'

export const getSystemInfo = payload => {
  return Taro.getSystemInfo(payload)
}

export const getSystemInfoSync = () => {
  return Taro.getSystemInfoSync()
}

export const canIUse = payload => {
  if (process.env.TARO_ENV != 'h5' && process.env.TARO_ENV != 'rn') {
    return Taro.canIUse(payload)
  }
}

export const getLaunchOptionsSync = () => {
  return Taro.getLaunchOptionsSync()
}

