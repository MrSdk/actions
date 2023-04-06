import { App } from "./app/app";
import configs from "./app/config";
import loggerFn from "./app/utils/logger";

let app: App;

function catchError ( error: any ) {
  let err_string = error.toString();

  console.log({
    message: "App stopped!",
    level: 0,
    error_message: err_string
  })

  process.exit( 1 );
}

process.on( "SIGINT", catchError )
process.on( "SIGTERM", catchError )

async function start (){
  let logger = loggerFn( configs.app.logLevel )

  app = new App( logger, configs )

  try {
    await app.init();
    await app.run();

  } catch (error) {
    catchError(error)
  }
}

start()