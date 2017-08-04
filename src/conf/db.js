import mongoose from "mongoose";

const connect = mongoose.connect("mongodb://localhost/test", {
  useMongoClient: true
});

export default connect;
