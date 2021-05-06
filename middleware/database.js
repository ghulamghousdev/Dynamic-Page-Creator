import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(
    "mongodb://dummyuser:Abcd1697@webpage-shard-00-00.scrwv.mongodb.net:27017,webpage-shard-00-01.scrwv.mongodb.net:27017,webpage-shard-00-02.scrwv.mongodb.net:27017/webapp?ssl=true&replicaSet=atlas-om0xb7-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  );
  return handler(req, res);
};

export default connectDB;
