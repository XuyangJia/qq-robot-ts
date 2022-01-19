import Router from 'koa-router'
import StockController from '../controller/StockController'

const router = new Router()
router.get('/', StockController.create)
export default router