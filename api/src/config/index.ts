const config = {
  server:{
    port: process.env.SERVER_PORT,
  },
  db:{
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  log: {
    "appenders": {
      "access": {
        "type": "dateFile",
        "filename": "log/access.log",
        "pattern": "-yyyy-MM-dd",
        "category": "http"
      },
      "db": {
        "type": "file",
        "filename": "log/db.log"
      },
      "app": {
        "type": "file",
        "filename": "log/app.log",
        "maxLogSize": 10485760,
        "numBackups": 3
      },
      "errorFile": {
        "type": "file",
        "filename": "log/errors.log"
      },
      "errors": {
        "type": "logLevelFilter",
        "level": "ERROR",
        "appender": "errorFile"
      }
    },
    "categories": {
      "default": { "appenders": [ "app", "errors" ], "level": "DEBUG" },
      "http": { "appenders": [ "access"], "level": "DEBUG" },
      "db": { "appenders": [ "db"], "level": "info" }
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE,
  }
}

export default config