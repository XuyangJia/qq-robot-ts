import { Context } from 'koa'

class StockController {
  async create(ctx:Context) {
    ctx.body = '123456'
  }
}

export default new StockController