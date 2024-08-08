"use strict"
const { Collection } = require('mongoose')
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const roomSchema = mongoose.Schema({
    roomnumber:{
        type:Number,
        trim:true,
        required:true
    },
    image: String,
  
    
    bedtype:{
        type:Number,
        trim:true,
        required:true
        //enum:["King size", "Queen size", "Double", "Triple", "Twin", "Single"]
    },
    price:{
        type:Number,
        trim:true,
        required:true
    },
}, {
    collection:"room",
    timestampts:true
})

module.exports = mongoose.model('Room', roomSchema)