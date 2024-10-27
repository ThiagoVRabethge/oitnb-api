import Movie from '../models/movie.js';
import { Op } from 'sequelize'; // For querying

const movieSeeds = [
  { name: 'Inception', sinopsis: 'A thief who steals corporate secrets.', streaming_id: 1, emotion_id: 1 },
  { name: 'The Matrix', sinopsis: 'A computer hacker learns from mysterious rebels.', streaming_id: 1, emotion_id: 3 },
  { name: 'Interstellar', sinopsis: 'A team of explorers travel through a wormhole.', streaming_id: 2, emotion_id: 2 },
];

export const seedMovies = async () => {
  for (const movie of movieSeeds) {
    const existingMovie = await Movie.findOne({ where: { name: movie.name } });
    if (!existingMovie) {
      await Movie.create(movie);
    }
  }
};
