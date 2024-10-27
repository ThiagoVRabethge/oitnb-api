import Emotion from '../models/emotion.js';

const emotionSeeds = [
  { name: 'Happy' },
  { name: 'Sad' },
  { name: 'Angry' },
  { name: 'Fearful' },
];

export const seedEmotions = async () => {
  for (const emotion of emotionSeeds) {
    const existingEmotion = await Emotion.findOne({ where: { name: emotion.name } });
    if (!existingEmotion) {
      await Emotion.create(emotion);
    }
  }
};
