import Movie from './movie.js';
import Series from './series.js';
import Streaming from './streaming.js';
import Emotion from './emotion.js';

// Streaming has many Movies and Series
Streaming.hasMany(Movie, { foreignKey: 'streaming_id' });
Movie.belongsTo(Streaming, { foreignKey: 'streaming_id' });

Streaming.hasMany(Series, { foreignKey: 'streaming_id' });
Series.belongsTo(Streaming, { foreignKey: 'streaming_id' });

// Emotion has many Movies and Series
Emotion.hasMany(Movie, { foreignKey: 'emotion_id' });
Movie.belongsTo(Emotion, { foreignKey: 'emotion_id' });

Emotion.hasMany(Series, { foreignKey: 'emotion_id' });
Series.belongsTo(Emotion, { foreignKey: 'emotion_id' });

export default function setupAssociations() {
  // You can call associations setup here if needed.
}
