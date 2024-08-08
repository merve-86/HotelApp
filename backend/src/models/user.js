"use strict"
const { Collection } = require('mongoose')
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const passwordEncrypt = require("../helpers/passwordEncrypt");


const userSchema = mongoose.Schema({
    //_id: mongoose tarafından otomatik oluşturuluyor
    username: {
        type: String,
        trim: true,
        required: true,
        //unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password)
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)