import { Context, Next } from 'koa'
import { accessLogger } from '../logger'

async function AccessLogMiddleware(ctx:Context, next:Next) {
  const logStr = `path${ctx.path} | method"${ctx.method} | ua:${ctx.headers['user-agent']}`
  accessLogger.info(logStr)
  await next()
}

export default AccessLogMiddleware