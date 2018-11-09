# Hapi 

# Starting

> npm i

## 实时监听
> supervisor app.js

# Help

## 初始化表结构

> $ node_modules/.bin/sequelize init

```javascript
├── config                       # 项目配置目录
|   ├── config.json              # 数据库连接的配置
├── models                       # 数据库 model
|   ├── index.js                 # 数据库连接的样板代码
├── migrations                   # 数据迁移的目录
├── seeders                      # 数据填充的目录
```

## 创建数据库

```js
node_modules/.bin/sequelize db:create
# 通过 --env 参数，指定为生产环境创建项目数据库
# node_modules/.bin/sequelize db:create --env production
```
