const mongoose = require('mongoose');





const embedseriesepisodes = new mongoose.Schema({
    episode_no:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    myCloud:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    fileMoon:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    vTube:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    superEmbed:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    embed:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    vidPlay1:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    vidPlay2:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
})





const embedSeriesJson = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    embed_title:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    episodes:{
        type: [embedseriesepisodes],
        required: true,
    }
})



const seriesEmbedJson = new mongoose.model('seriesembed', embedSeriesJson);


module.exports = seriesEmbedJson;