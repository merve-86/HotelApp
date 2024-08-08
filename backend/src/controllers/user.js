"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const userModel = require("../models/user")

module.exports={

    list: async(req, res) => {
        res.status(200).send({
            error:false,
            details:await res.getModelListDetails(userModel),
            data:await res.getModelList(userModel)
        })
    },

    read: async(req, res) => {
        res.status(200).send({
            error: false,
            data: await userModel.findOne({_id:req.params.id})
        })
    },

    create: async (req, res) => {
        /*
                #swagger.tags = ["Users"]
                #swagger.summary = "Create User"
        */
    
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
            req?.body?.password,
          )
        ) {
          res.errorStatusCode = 404;
          throw new Error(
            "Password must be at least 8 characters long and contain at least one special character and  at least one uppercase character",
          );
          //   const customError = new Error("");
          //   error.statusCode = 404;
          //   throw customError;
        }
        const data = await userModel.create(req.body);
        res.status(201).send({
          error: false,
          data,
        });
      },

    update: async(req, res) => {

        res.status(202).send({
            error:false,
            data: await userModel.updateOne({_id:req.params.id}, req.body, {runValidators:true} ),
            new: await userModel.findOne({_id:req.params.id})
        })
    },

    delete: async(req, res) => {

        const data = await userModel.deleteOne({_id:req.params.id})
        res.status(data.deletedCount ? 204 : 404).send({
            error:!data.deletedCount,
            data
        })
    },
}
