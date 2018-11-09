const { env } = process

module.exports = {
  host: env.HOST,
  port: env.PORT,
  jwtSecret: env.JWT_SECRET,
  wxAppid: env.WXAPPID,
  wxMchid: env.WXMCHID,
  wxPayApiKey: env.WXPAYAPIKEY
}