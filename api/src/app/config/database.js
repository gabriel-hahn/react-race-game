const mongoose = require('mongoose');

class DatabaseController {
  startConnection() {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-shard-00-00-5p6c5.mongodb.net:27017,cluster0-shard-00-01-5p6c5.mongodb.net:27017,cluster0-shard-00-02-5p6c5.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`);
    mongoose.connection.once('open', () => {
      console.log('Connected to database');
    });
  }
}

module.exports = new DatabaseController();
