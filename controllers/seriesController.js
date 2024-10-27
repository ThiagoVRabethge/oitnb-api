import Series from '../models/series.js';
import Streaming from '../models/streaming.js';
import Emotion from '../models/emotion.js';

export const getAllSeries = async (req, reply) => {
  const series = await Series.findAll({ include: Streaming });
  reply.send(series);
};

export const getSeriesById = async (req, reply) => {
  const series = await Series.findByPk(req.params.id, { include: Streaming });
  if (!series) reply.code(404).send({ error: 'Series not found' });
  else reply.send(series);
};

export const getSeriesByStreamingId = async (req, reply) => {
  const series = await Series.findAll({
    include: [
      {
        model: Streaming,
        where: { id: req.params.id }
      }
    ]
  });
  reply.send(series);
};

export const getSeriesByStreamingIdAndEmotionId = async (req, reply) => {
  const series = await Series.findAll({
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
  reply.send(series);
};



// Additional CRUD operations can go here
