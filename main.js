// import Fastify from 'fastify';
// import sequelize from './database.js';
// import movieRoutes from './routes/movieRoutes.js';
// import seriesRoutes from './routes/seriesRoutes.js';
// import streamingRoutes from './routes/streamingRoutes.js';
// import syncAndSeedDatabase from "./syncAndSeedDatabase.js"
// import setupAssociations from './models/associations.js';
// import cors from '@fastify/cors';

// const fastify = Fastify({ logger: true });

// setupAssociations();

// await sequelize.sync();

// fastify.register(cors, {
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// });

// fastify.register(movieRoutes);
// fastify.register(seriesRoutes);
// fastify.register(streamingRoutes);

// const start = async () => {
//   await syncAndSeedDatabase();

//   try {    
//     await fastify.listen({ port: 3000 });

//     console.log(`Server listening on http://localhost:3000`);

//   } catch (err) {
//     fastify.log.error(err);

//     process.exit(1);

//   }
// };

// start();

import Fastify from 'fastify';
import sequelize from './database.js';
import setupAssociations from './models/associations.js';
import { seedMovies } from './seeds/movieSeeds.js';
import { seedSeries } from './seeds/seriesSeeds.js';
import { seedStreamings } from './seeds/streamingSeeds.js';
import { seedEmotions } from './seeds/emotionSeeds.js';
import Emotion from './models/emotion.js';
import Movie from './models/movie.js';
import Series from './models/series.js';
import Streaming from './models/streaming.js';

import streamingRoutes from './routes/streamingRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import seriesRoutes from './routes/seriesRoutes.js';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

setupAssociations();

const syncAndSeedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced.');

    await seedEmotions();
    console.log('Emotions seeded.');

    await seedStreamings();
    console.log('Streamings seeded.');

    await seedMovies();
    console.log('Movies seeded.');

    await seedSeries();
    console.log('Series seeded.');

  } catch (error) {
    console.error('Error syncing or seeding the database:', error);
  }
};

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

// fastify.get('/movies', async (request, reply) => {
//   const movies = await Movie.findAll();
//   reply.send(movies);
// });

// fastify.get('/series', async (request, reply) => {
//   const series = await Series.findAll({ include: [Streaming, Emotion] });
//   reply.send(series);
// });

const start = async () => {
  await syncAndSeedDatabase();

  try {
    await fastify.listen({ port: 3000 });
    console.log(`Server listening on http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
