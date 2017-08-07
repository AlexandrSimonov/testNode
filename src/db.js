import mongoose from "mongoose";

const connect = mongoose.connect(
  process.env.mongo_connect,
  {
    useMongoClient: true
  },
  err => {
    if (err) {
      console.log(err);
    }
  }
);

export default connect;
