const mongoose = require('mongoose')


const CropPropertySchema = new mongoose.Schema({

    cropcycle: {type: String,required: true,trim: true},

    season: {type: String,required: true,trim: true},
    months: {type: String,required: true,trim: true}


}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('CropProperty', CropPropertySchema)