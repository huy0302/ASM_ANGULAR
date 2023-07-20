import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;
const taskSchema = new mongoose.Schema({
    nameTask: {
        type: String,
       
    },
    des: {
        type: String
    },
    timeStart: {
        type: String,
        
    },
    timeEnd: {
        type: String,
        
    },
    
    projectId: {
        type: ObjectId,
        ref: 'projects'
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    }
}, { timestamps: true });


export default mongoose.model('tasks', taskSchema);