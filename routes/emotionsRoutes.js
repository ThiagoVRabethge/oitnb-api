import getAllEmotions from "../controllers/emotionsController.js";

export default async function (fastify) {
  fastify.get('/emotions', getAllEmotions);
}