const mongoose = require('mongoose')

const gu = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    group:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Group'
    },
    amount:{
        type:Number,
        default:0
    }
})

const GU = mongoose.model('GU', gu)

module.exports = GU
