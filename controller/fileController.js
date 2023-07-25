const File = require('../model/fileModel')
const fs = require('fs')       // fs -> file system -> which is used to handle the files


const fileRead = async(req,res) => {
    try{
        let data = await File.find()
        res.status(200).json({ length: data.length, files: data })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


const fileUpload = async(req,res) => {
    try{
        const fileData = req.file

        let extFile = await File.findOne({ originalname: fileData.originalname })
            if(extFile) {
                fs.unlinkSync(fileData.path)  // unlinkSync -> delete the file
                return res.status(400).json({ msg: `File already exists..`})
            }

            const newFile = await File.create(fileData)

        return res.status(200).json({ msg: "File stored successfully", file: newFile })
        
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const fileDelete = async (req,res) => {
    try{
        let id = req.params.id 

       // return res.json({ id })

        let extFile = await File.findById({ _id: id })
            if(!extFile) {
                return res.status(404).json({ msg: `Requested file id not found`})
            }

            // delete document
            fs.unlinkSync(extFile.path)

            // delete db collection
            await File.findByIdAndDelete({ _id: id })

        return res.status(200).json({ msg: "File deleted successfully" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = {fileRead, fileUpload, fileDelete }