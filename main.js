import cors from '@fastify/cors';
import "dotenv/config";
import Fastify from 'fastify';
import setupAssociations from './models/associations.js';
import emotionsRoutes from "./routes/emotionsRoutes.js";
import movieRoutes from './routes/movieRoutes.js';
import seriesRoutes from './routes/seriesRoutes.js';
import streamingRoutes from './routes/streamingRoutes.js';
import syncAndSeedDatabase from './syncAndSeedDatabase.js';

const fastify = Fastify({ logger: true });

setupAssociations();

fastify.register(cors, {
  origin: process.env.ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

fastify.get('/', async (request, reply) => {
  return { "root": "endpoint" }
})

fastify.register(streamingRoutes);
fastify.register(movieRoutes);
fastify.register(seriesRoutes);
fastify.register(emotionsRoutes);

const start = async () => {
  await syncAndSeedDatabase();

  try {
    await fastify.listen({ port: 3000 });

  } catch (err) {
    fastify.log.error(err);

    process.exit(1);
  }
};

start();
