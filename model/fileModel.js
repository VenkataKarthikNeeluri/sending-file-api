const mangoose = require('mongoose')

const fileSchema = new mangoose.Schema({
    fieldname: {
        type: String,
        required: true,
        trim: true
    },
    originalname: {
        type: String,
        required: true,
        trim: true
        
    },
    encoding: {
        type: String,
        required: true,
        trim: true
    },
    mimetype: {
        type: String,
        required: true,
        trim: true
    },
    destination: {
        type: String,
        required: true,
        trim: true
    },
    filename: {
        type: String,
        required: true,
        trim: true
    },
    path: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    collection: 'files',
    timestamps: true
})

module.exports = mangoose.model("File", fileSchema)