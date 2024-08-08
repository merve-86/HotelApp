"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// auth:
router.use('/auth', require('./auth'))
// user:
router.use('/users', require('./user'))
// token:
router.use('/tokens', require('./token'))

// room:
router.use('/room', require('./room'))
// resarvation:
router.use('/resarvation', require('./resarvation'))

// document:
router.use('/documents', require('./document'))

/* ------------------------------------------------------- */
module.exports = router