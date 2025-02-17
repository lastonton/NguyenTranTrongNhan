import mongoose from "mongoose";
import MyConstants from "./MyConstants";

const uri = 'mongodb+srv://' + MyConstants.DB_USER + ':' + MyConstants.DB_PASS + '@' + MyConstants.DB_SERVER + '/' + MyConstants.DB_DATABASE;
const connectDB =  async () => {
    try {
        await mongoose.connect(uri)
        .then(() => { console.log('Connected to ' + MyConstants.DB_SERVER + '/' + MyConstants.DB_DATABASE); })
        .catch((err) => { console.error(err); });
    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }
}

export default connectDB;