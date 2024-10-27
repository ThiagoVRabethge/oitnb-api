import cors from '@fastify/cors';
import Fastify from 'fastify';
import setupAssociations from './models/associations.js';
import Emotion from './models/emotion.js';
import movieRoutes from './routes/movieRoutes.js';
import seriesRoutes from './routes/seriesRoutes.js';
import streamingRoutes from './routes/streamingRoutes.js';
import syncAndSeedDatabase from './syncAndSeedDatabase.js';

const fastify = Fastify({ logger: true });

setupAssociations();

fastify.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

fastify.register(streamingRoutes);
fastify.register(movieRoutes);
fastify.register(seriesRoutes);

fastify.get('/emotions', async (request, reply) => {
  const emotions = await Emotion.findAll();
  reply.send(emotions);
});

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
