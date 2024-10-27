import { getAllMovies, getMovieById, getMoviesByStreamingId, getMoviesByStreamingIdAndEmotionId } from '../controllers/movieController.js';

export default async function (fastify) {
  fastify.get('/movies', getAllMovies);
  fastify.get('/movies/:id', getMovieById);
  fastify.get('/movies/streaming/:id', getMoviesByStreamingId);
  fastify.get('/movies/streaming/:streamingId/emotion/:emotionId', getMoviesByStreamingIdAndEmotionId);
  // Additional routes can be added here
}
