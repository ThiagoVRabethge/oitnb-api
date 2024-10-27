import Movie from '../models/movie.js';
import Streaming from '../models/streaming.js';
import Emotion from '../models/emotion.js';

export const getAllMovies = async (req, reply) => {
  const movies = await Movie.findAll({ include: Streaming });
  reply.send(movies);
};

export const getMovieById = async (req, reply) => {
  const movie = await Movie.findByPk(req.params.id, { include: Streaming });
  if (!movie) reply.code(404).send({ error: 'Movie not found' });
  else reply.send(movie);
};

export const getMoviesByStreamingId = async (req, reply) => {
  const movies = await Movie.findAll({
    include: [
      {
        model: Streaming,
        where: { id: req.params.id }
      }
    ]
  });
  reply.send(movies);
};

export const getMoviesByStreamingIdAndEmotionId = async (req, reply) => {
  const movies = await Movie.findAll({
    include: [
      {
        model: Streaming,
        where: { id: req.params.streamingId }
      },
      {
        model: Emotion,
        where: { id: req.params.emotionId }
      }
    ]
  });
  reply.send(movies);
};




// Additional CRUD operations can go here
