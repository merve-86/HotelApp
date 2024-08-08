"use strict"
const { Collection } = require('mongoose')
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const resarvationSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room",
        required:true
    },
    arrival_date:{
        type:Date,
        trim:true,
        required:true
    },
    departure_date:{
        type:Date,
        trim:true,
        required:true
    },
    guest_number:{
        type:Number,
        trim:true,
        required:true
    },
    night:{
        type:Number,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        trim:true,
        required:true
    },
    totalprice:{
        type:Number,
        trim:true
    }
}, {
    collection:"resarvation",
    timestamps:true
})

module.exports = mongoose.model("Resarvation", resarvationSchema)