import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const route_opts = {
  method: "GET",
  url: "/",
  handler: main
}

function main ( req: FastifyRequest,res: FastifyReply ) {
  res.send({ 
    msg: "ok" 
  })
}

export default function ( fastify: FastifyInstance ) {
  fastify.register(
    function ( api: any, opts, done ) {
      api.route( route_opts )
      done()
    }
  )
}