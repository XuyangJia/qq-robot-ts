import { Context, Next } from "koa";
import { verify } from "../utils/auth";

export function AuthMiddleware(ctx:Context, next:Next) {
  const token = ctx.headers.authorization
  if (token) {
    const { error } = verify(token)
    if (error) {
      ctx.body = {
        msg: error,
        code: 4000
      }
      return
    } else {
      return next()
    }
  }
  ctx.body = {
    msg: 'authorization 不能为空',
    code: 4000
  }
  return
}