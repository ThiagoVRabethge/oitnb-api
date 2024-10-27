import Series from '../models/series.js';
import { Op } from 'sequelize'; // For querying

const seriesSeeds = [
  { name: 'Breaking Bad', sinopsis: 'A high school chemistry teacher turned meth manufacturer.', streaming_id: 1, emotion_id: 2 },
  { name: 'Stranger Things', sinopsis: 'A group of friends uncover supernatural occurrences.', streaming_id: 2, emotion_id: 1 },
];

export const seedSeries = async () => {
  for (const series of seriesSeeds) {
    const existingSeries = await Series.findOne({ where: { name: series.name } });
    if (!existingSeries) {
      await Series.create(series);
    }
  }
};
