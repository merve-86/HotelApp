"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/pizza:

const resarvation = require("../controllers/resarvation");

// URL: /pizzas

router.route("/")
    .get(resarvation.list)
    .post(resarvation.create);

router
    .route("/:id")
    .get(resarvation.read)
    .put(resarvation.update)
    .patch(resarvation.update)
    .delete(resarvation.delete);

/* ------------------------------------------------------- */
module.exports = router;

