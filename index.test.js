"use strict";

const { fastify } = require("./index.js");
const { expect, test } = require("@jest/globals");

test("Non-existent resource should return a 404", async () => {
  const response = await fastify.inject({
    method: "GET",
    url: "/api/user",
  });
  expect(response.statusCode).toBe(404);
  fastify.close();
});

test("Top level route should return hello world object", async () => {
  const response = await fastify.inject({
    method: "GET",
    url: "/",
  });
  expect(response.statusCode).toBe(200);
  expect(response.json().hello).toBe("world");
  fastify.close();
});
