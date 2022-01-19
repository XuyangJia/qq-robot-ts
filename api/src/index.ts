import Koa from 'koa'
import koaBody from 'koa-body'
import 'dotenv/config'
import router from './router'
import config from './config'
import AccessLogMiddleware from './middleware/AccessLogMiddleware'

const app = new Koa
// app.use(koaBody({
//   multipart: true,
//   parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE']
// }))
// app.use(AccessLogMiddleware)
app.use(router.routes())
const APP_PORT = config.server.port
app.listen(APP_PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${APP_PORT}/ ...`)
})