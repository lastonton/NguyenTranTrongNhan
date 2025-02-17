import mongoose from 'mongoose';
import WorkList from './Models';

const WorkListDB = {
    async selectAll() {
        return await WorkList.find().exec();
    },

    async insert(work_item: any) {
        work_item._id = new mongoose.Types.ObjectId();
        const newWork = new WorkList(work_item);
        return await newWork.save();
    },

    async selectById(_id: string) {
        return await WorkList.findById(_id).exec();
    },

    async update(_id: string, work: any) {
        const newvalues = { title: work.title, description: work.description, status: work.status};
        return await WorkList.findByIdAndUpdate(_id, newvalues, { new: true }).exec();
    },

    async delete(_id: string) {
        return await WorkList.findByIdAndDelete(_id).exec();
    },

    async findByStatus(status: string) {
        return await WorkList.find({ status }).exec();
    }
};

export default WorkListDB;