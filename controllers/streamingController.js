import Streaming from '../models/streaming.js';

export const getAllStreamings = async (req, reply) => {
  const streamings = await Streaming.findAll();
  reply.send(streamings);
};

export const getStreamingById = async (req, reply) => {
  const streaming = await Streaming.findByPk(req.params.id);
  if (!streaming) reply.code(404).send({ error: 'Streaming not found' });
  else reply.send(streaming);
};

export const postStreaming = async (req, reply) => {
  const { name } = req.body;
  const streaming = await Streaming.create({ name });
  reply.send(streaming);
};

