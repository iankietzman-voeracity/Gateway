"use strict";

const fastify = require("fastify")({
  logger: true,
});

function buildFastify() {
  fastify.get("/", function (request, reply) {
    reply.send({ hello: "world" });
  });

  fastify.listen({ port: 8000, host: process.env.HOST_IP || "0.0.0.0" }, function (err, _address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });

  return fastify;
}

buildFastify();

module.exports.fastify = fastify;
