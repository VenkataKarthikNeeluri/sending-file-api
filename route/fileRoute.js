const fileRoute = require('express').Router()
const{ fileUpload, fileDelete, fileRead } = require('../controller/fileController')
const fileConfig = require('../middleware/fileConfig')

// read all
fileRoute.get(`/all`, fileRead)

// upload
fileRoute.post(`/upload`, fileConfig, fileUpload)

// delete
fileRoute.delete(`/delete/:id`, fileDelete)

module.exports = fileRoute