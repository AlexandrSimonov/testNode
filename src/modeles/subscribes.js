import mongoose from "../conf/db";
import SubscribesSchema from "../schemas/subscribes";

const Subscribe = mongoose.model("subscribes", SubscribesSchema);

export default Subscribe;
