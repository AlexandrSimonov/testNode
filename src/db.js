import mongoose from "mongoose";

const connect = mongoose.connect(
  "mongodb://localhost/test",
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
