import fastify, { FastifyInstance } from "fastify";
import routify from "./routes/index"

export class App {
  logger;
  configs;
  app: any;

  constructor ( logger: any, configs: any ) {
    this.logger = logger;
    this.configs = configs;
  }

  async init () {
    this.initServer()

    this.logger.trace({ message: "App inited" })
  }

  async run () {
    this.runServer()
  }

  initServer () {
    this.app = fastify({
      logger: this.logger.child({ module: "fastify" })
    })

    routify( this.app )
  }

  runServer () {
    let { app: conf } = this.configs; 

    return this.app.listen({
      port: conf.port,
      host: conf.host
    },()=>{
      this.logger.info({
        message: `Server running on port ${conf.port}`
      })
    })
  }
}