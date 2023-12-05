const mongoose = require('mongoose');


const embedMovieJson = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        trim: true,
    },
    embed_title:{
        type: String,
        required: true,
        trim: true,
    },
    myCloud:{
        type: String,
        required: true,
        trim: true,
    },
    fileMoon:{
        type: String,
        required: true,
        trim: true,
    },
    vTube:{
        type: String,
        required: true,
        trim: true,
    },
    superEmbed:{
        type: String,
        required: true,
        trim: true,
    },
    embed:{
        type: String,
        required: true,
        trim: true,
    },
    vidPlay1:{
        type: String,
        required: true,
        trim: true,
    },
    vidPlay2:{
        type: String,
        required: true,
        trim: true,
    },
})



const movieEmbedJson = new mongoose.model('embed', embedMovieJson);


module.exports = movieEmbedJson;
