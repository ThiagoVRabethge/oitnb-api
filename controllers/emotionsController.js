import Emotion from "../models/emotion.js";

const getAllEmotions = async (request, reply) => {
  const emotions = await Emotion.findAll();
  reply.send(emotions);
}

export default getAllEmotions