import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;
const projectSchema = new mongoose.Schema({
    nameProject: {
        type: String,
        required: true,
    },
    quantityMember: {
        type: String
    },
    startDate: {
        type: String,
        
    },
    endDate: {
        type: String,
        
    },
    moneyProject: {
        type: Number,
        
    },
    member : [
        {
            userId :{
                type: ObjectId,
                ref: "User"
            }
        }
    ]
}, { timestamps: true });


export default mongoose.model('projects', projectSchema);