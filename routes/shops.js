const Joi = require('joi')
const models = require('../models')
const { paginationDefine, jwtHeaderDefine } = require('../utils/router.helper')
const GROUP_NAME = 'shops'

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      const { rows: results, count: totalCount } = await models.shops.findAndCountAll({
        attributes: ['id', 'name'],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit
      })
      reply({ results, totalCount })
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
      validate: {
        query: {
          ...paginationDefine
        },
        ...jwtHeaderDefine
      }
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, reply) => {
      // 增加带有 where 的条件查询
      const { rows: results, count: totalCount } = await models.goods.findAndCountAll({
        // 基于 shop_id 的条件查询
        where: {
          shop_id: request.params.shopId,
        },
        attributes: [
          'id',
          'name',
        ],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit
      })
      reply({ results, totalCount })
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
      validate: {
        params: {
          shopId: Joi.string().required().description('店铺的id'),
        },
        query: {
          ...paginationDefine,
        },
        ...jwtHeaderDefine
      },
    }
  }
]