const express = require('express')
const router = express.Router()

// refs to get data from mongodb
const Project = require('../models/project')
const config = require('../../config/globals')

// allow cross-origin requests from anuglar app on another domain
// this executes before every method in this controller
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', config.clientServer)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    next()
})

// GET: /projects
router.get('/', (req, res, next) => {
    //const projects = { id: 1, name: 'something' }
    // use Mongoose model to select all projects from mongodb
    Project.find((err, projects) => {
        if (err) {
            return res.json(err).status(400) // bad request
        }
        else {
            return res.json(projects).status(200); // ok
        }
    })
})

// make public
module.exports = router
