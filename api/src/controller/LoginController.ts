import { Context } from "koa";
import AdminService from "../service/AdminService";
import { sign } from "../utils/auth";
import response from "../utils/response";

class LoginController {
  async index(ctx:Context) {
    const admin = await AdminService.getAdmin()
    if (!admin) {
      return response.error(ctx, {}, '管理员不存在')
    }
    const token = sign(admin)
    response.success(ctx, { token })
  }
}

export default new LoginController