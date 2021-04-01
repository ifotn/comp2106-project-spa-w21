const express = require('express')
const router = express.Router()

// refs to get data from mongodb
const mongoose = require('mongoose')
const Project = require('../models/project')

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
