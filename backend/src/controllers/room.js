"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const roomModel = require('../models/room')

module.exports = {
    
    list: async (req, res) => {

        const data = await res.getModelList(roomModel)
        res.status(200).send({
            error:false,
            details:await res.getModelListDetails(roomModel),
            data
        })
    },

    read: async (req, res) => {

        const data = await roomModel.findOne({_id:req.params.id})
        res.status(200).send({
            error:false,
            data
        })
    },

    create: async (req, res) => {
        console.log('file:', req.file)

        if (req.file) {
            req.body.image = req.file.filename
        }

     
        const data = await roomModel.create(req.body)
        res.status(200).send({
            error:false,
            data
        })
    },

    update: async (req, res) => {

        if (req.file) {
            req.body.image = req.file.filename
        }
        const data = await roomModel.updateOne({_id:req.params.id}, req.body, {runValidators:true})
        res.status(202).send({
            error:true,
            data,
            new: await roomModel.findOne({_id:req.params.id})
        })
    },

    delete: async (req, res) => {

        const data = await roomModel.deleteOne({_id:req.params.id})

        res.status(data.deleteCount ? 204 : 404).send({
            error:!data.deleteCount,
            data
        })
    },

}