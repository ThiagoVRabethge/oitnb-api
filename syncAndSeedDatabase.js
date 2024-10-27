import sequelize from './database.js';
import { seedEmotions } from './seeds/emotionSeeds.js';
import { seedMovies } from './seeds/movieSeeds.js';
import { seedSeries } from './seeds/seriesSeeds.js';
import { seedStreamings } from './seeds/streamingSeeds.js';

const syncAndSeedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced.');

    await seedEmotions();
    console.log('Emotions seeded.');

    await seedStreamings();
    console.log('Streamings seeded.');

    await seedMovies();
    console.log('Movies seeded.');

    await seedSeries();
    console.log('Series seeded.');

  } catch (error) {
    console.error('Error syncing or seeding the database:', error);
  }
};

export default syncAndSeedDatabase;