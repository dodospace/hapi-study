const Hapi = require('hapi')
require('env2')('./.env')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-hapi')
const routerShops = require('./routes/shops')
const routerOrders = require('./routes/orders')
const routerUsers = require('./routes/users')
const pluginHapiSwagger = require('./plugins/hapi-swagger')
const pluginHapiPagination = require('./plugins/hapi-pagination')
const hapiAuthJWT2 = require('hapi-auth-jwt2')
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2')

const server = new Hapi.Server()

server.connection({
  port: config.port,
  host: config.host
})

const init = async () => {
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
    pluginHapiPagination,
    hapiAuthJWT2
  ])
  pluginHapiAuthJWT2(server)
  server.route([
    // 创建一个简单的hello hapi接口
    ...routesHelloHapi,
    ...routerShops,
    ...routerOrders,
    ...routerUsers
  ])

  // 启动服务
  await server.start()
  console.log(`Sever running at: ${server.info.uri}`)
}

init()