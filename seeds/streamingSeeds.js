import Streaming from '../models/streaming.js';

const streamingSeeds = [
  { name: 'Netflix' },
  { name: 'Hulu' },
];

export const seedStreamings = async () => {
  for (const streaming of streamingSeeds) {
    const existingStreaming = await Streaming.findOne({ where: { name: streaming.name } });

    if (!existingStreaming) {
      await Streaming.create(streaming);
    }
  }
};
