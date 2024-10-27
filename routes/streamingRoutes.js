import { getAllStreamings, getStreamingById, postStreaming } from '../controllers/streamingController.js';

export default async function (fastify) {
  fastify.get('/streamings', getAllStreamings);
  fastify.get('/streamings/:id', getStreamingById);
  fastify.post('/streamings', postStreaming)
}