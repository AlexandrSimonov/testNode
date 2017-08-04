import mongoose from "mongoose";

const Schema = mongoose.Schema;

export default new Schema({
  firstName: String,
  lastName: String,
  email: String,
  payments: [{}]
});
