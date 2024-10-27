import { getAllSeries, getSeriesById, getSeriesByStreamingId, getSeriesByStreamingIdAndEmotionId } from '../controllers/seriesController.js';

export default async function (fastify) {
  fastify.get('/series', getAllSeries);
  fastify.get('/series/:id', getSeriesById);
  fastify.get('/series/streaming/:id', getSeriesByStreamingId);
  fastify.get('/series/streaming/:streamingId/emotion/:emotionId', getSeriesByStreamingIdAndEmotionId);
  // Additional routes can be added here
}
