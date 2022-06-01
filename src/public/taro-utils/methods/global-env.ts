export const isH5 = process.env.TARO_ENV === 'h5'
export const isWeapp = process.env.TARO_ENV === 'weapp'
export const isAlipay = process.env.TARO_ENV === 'alipay'

export const isDev = process.env.NODE_ENV === 'development'
