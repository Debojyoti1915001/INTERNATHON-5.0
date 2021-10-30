const mongoose = require('mongoose')

const group = mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    }],
    amount:{
        type:Number,
        default:0
    }
})

const Group = mongoose.model('Group', group)

module.exports = Group