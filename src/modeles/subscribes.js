import mongoose from "../db";
import SubscribesSchema from "./schemas/subscribes";

const Subscribe = mongoose.model("subscribes", SubscribesSchema);

export default Subscribe;
