const express = require("express");
const { dbConnection } = require("./database");
const morgan = require("morgan");

class Server {
    constructor() {
      this.app = express();
  
      //env
      this.port = process.env.PORT;
  
      //rutas del proyecto
      this.routersPath = "/api";
  
      //middleware
      this.middleware();
  
      //routers
    //   this.routers();
  
      //conexion
      this.conectarDB();
    }
    middleware() {
      this.app.use(morgan("dev"));
      this.app.use(express.json());
    }
    // routers() {
    //   this.app.use(this.routersPath, require("./routers/routes.cliente"));
    // }
    async conectarDB() {
      await dbConnection();
    }
    listen() {
      this.app.listen(this.port, () => {
        console.log("Servidor corriendo en el puerto: ", this.port);
      });
    }
  }

  module.exports = {
    Server,
  };