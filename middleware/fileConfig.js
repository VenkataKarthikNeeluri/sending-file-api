

const express = require('express')
const multer = require('multer')
const path = require('path')

// storage location and filename                     // middleware always connect to the ROUTE
const myStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'uploads/')
    },
    filename: (req,file,cb) => {
        // cb(null, file.originalname)
        cb(null, `doc-${new Date().getTime().toString()}${path.extname(file.originalname)}`)
    }
})

// upload logic
const filiConfig = multer({
    storage: myStorage,
    limits: { fileSize: 10 * 1024 *1024 }  // filesize upto 10mb
}).single('inpFile')  /*inpfile -> form field name */

module.exports = filiConfig