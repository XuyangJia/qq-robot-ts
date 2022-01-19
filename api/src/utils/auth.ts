import jwt from "jsonwebtoken";
import config from "../config";


function sign(data:any) {
  return jwt.sign(data, config.jwt.secret as string, {
    expiresIn: config.jwt.expire
  })
}

function verify(token: string) {
  try {
    const decoded = jwt.verify(token, config.jwt.secret as string)
    return {
      admin: decoded,
      error: null
    }
  } catch (error) {
    return {
      admin: null,
      error
    }
    
  }
}