# Hapi 

# Starting

> $ npm install

## 实时监听
> $ supervisor app.js

# Help

## 初始化表结构

```shh
node_modules/.bin/sequelize init


├── config                       # 项目配置目录
|   ├── config.json              # 数据库连接的配置
├── models                       # 数据库 model
|   ├── index.js                 # 数据库连接的样板代码
├── migrations                   # 数据迁移的目录
├── seeders                      # 数据填充的目录
```

## 创建数据库

```shh
node_modules/.bin/sequelize db:create

# 通过 --env 参数，指定为生产环境创建项目数据库
# node_modules/.bin/sequelize db:create --env production
```

## 数据迁移 migration

### 创建数据迁移文件
> $ node_modules/.bin/sequelize migration:create --name create-shops-table

### 按照迁移文件的时间戳逐个完成自动化表结构的创建
> $ node_modules/.bin/sequelize db:migrate

### 回退一次迁移
> $ node_modules/.bin/sequelize db:migrate:undo

### 回退所有
> $ node_modules/.bin/sequelize db:migrate:undo:all

### 通过--to 回退指定的迁移， xxxxxxxxx是创建时候自动生成的时间戳
> $ node_modules/.bin/sequelize db:migrate:undo:all --to xxxxxxxxx-create-shops-table.js

### 向指定的表中添加新的字段
> $ node_modules/.bin/sequelize migration:create --name add-columns-to-shops-table

如下：
```js
// 向shops表，添加address字段，类型为string
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('shops', 'address', { type: Sequelize.STRING }),
  ]),

  down: queryInterface => Promise.all([
    queryInterface.removeColumn('shops', 'address'),
  ]),
};
```

## 种子数据填充 seeders

### 创建种子数据
> $ node_modules/.bin/sequelize seed:create --name init-shops

### 向表内填充种子数据
> $ node_modules/.bin/sequelize db:seed:all

### 通过--seed，填充指定的种子数据
> $ node_modules/.bin/sequelize db:seed --seed xxxxxxxxx-init-shopsjs

### 撤销所有的种子
> $ node_modules/.bin/sequelize db:seed:undo:all

### 撤销指定的种子
> $ node_modules/.bin/sequelize db:seed:undo --seed XXXXXXXXXXXXXX-demo-user.js