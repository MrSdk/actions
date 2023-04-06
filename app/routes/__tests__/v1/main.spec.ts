import { App } from "../../../app"

describe("Test route main route", function () {
  let app;
  let response_body = { msg: "ok" }
  let mockLogger = {
    trace: () => {},
    info: () => {},
    warn: () => {},
    error: () => {},
    document: () => {},
    child: ()=>this
  };
  let mockConfig = {
    app: {
      port: 123, host: "localhost"
    }
  }
  
  beforeAll( async function () {
    app = new App( mockLogger, mockConfig );
    await app.init();
    await app.run();
  } )

  describe("route /", function () {
    it("should properly response", async function () {
      let response = await app.app.inject({
        method: "GET",
        url: '/'
      })
      
      expect( response.body ).toEqual( JSON.stringify(response_body) )
    })      
  })

})