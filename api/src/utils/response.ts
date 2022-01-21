import { Context } from "koa";

function success<T>(ctx:Context, data: any = null, msg: string = 'success', code: number = 0) {
  ctx.body = {
    code,
    msg,
    data
  }
}

function error(ctx:Context, data: any = null, msg: string = 'success', code: number = 500) {
  ctx.body = {
    code,
    msg,
    data
  }
}

export default { success, error }