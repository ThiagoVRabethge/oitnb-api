import sequelize from './database.js';
import { seedMovies } from "./seeds/movieSeeds.js";
import { seedSeries } from "./seeds/seriesSeeds.js";
import { seedStreamings } from './seeds/streamingSeeds.js';
import { seedEmotions } from './seeds/emotionSeeds.js';

const syncAndSeedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced.');

    // Execute seed functions
    await seedStreamings();
    console.log('Streamings seeded.');

    await seedMovies();
    console.log('Movies seeded.');

    await seedSeries();
    console.log('Series seeded.');

    await seedEmotions(); // Seed the Emotion model
    console.log('Emotions seeded.');

  } catch (error) {
    console.error('Error syncing or seeding the database:', error);
  }
};

export default syncAndSeedDatabase;