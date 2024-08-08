"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const resarvationModel = require('../models/resarvation')

module.exports = {
    
    list: async (req, res) => {

        const data = await res.getModelList(resarvationModel)
        res.status(200).send({
            error:false,
            details:await res.getModelListDetails(resarvationModel),
            data
        })
    },

    read: async (req, res) => {

        const data = await resarvationModel.findOne({_id:req.params.id})
        res.status(200).send({
            error:false,
            data
        })
    },

    create: async (req, res) => {

        const data = await resarvationModel.create(req.body)
        res.status(200).send({
            error:false,
            data
        })
    },

    update: async (req, res) => {

        const data = await resarvationModel.updateOne({_id:req.params.id}, req.body, {runValidators:true})
        res.status(202).send({
            error:true,
            data,
            new: await resarvationModel.findOne({_id:req.params.id})
        })
    },

    delete: async (req, res) => {

        const data = await resarvationModel.deleteOne({_id:req.params.id})

        res.status(data.deleteCount ? 204 : 404).send({
            error:!data.deleteCount,
            data
        })
    },

}