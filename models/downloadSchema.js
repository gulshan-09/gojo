const mongoose = require('mongoose');


const downloadJson = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        trim: true,
    },
    download_title:{
        type: String,
        required: true,
        trim: true,
    },
    low:{
        type: String,
        required: true,
        trim: true,
    },
    medium:{
        type: String,
        required: true,
        trim: true,
    },
    high:{
        type: String,
        required: true,
        trim: true,
    },
})



const downloadLinkJson = new mongoose.model('downlaodlink', downloadJson);


module.exports = downloadLinkJson;
