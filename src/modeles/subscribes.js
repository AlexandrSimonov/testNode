import mongoose from "../db";
import SubscribesSchema from "./schemas/subscribes";

const Subscribes = mongoose.model("subscribes", SubscribesSchema);

export default Subscribes;
