import mongoose from "mongoose";

const WorkListSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    status: {type: String, default: "In Progress"},
    cdate: Number
})

const WorkList = mongoose.model('WorkList', WorkListSchema);
export default WorkList;