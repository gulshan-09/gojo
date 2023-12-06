const mongoose = require('mongoose');


const jsonSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    embed_title: {
        type: String,
        required: true,
        trim: true,
    },
    sposter: {
        type: String,
        trim: true,
    },
    bposter: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    duration: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    episodes: {
        type: String,
        required: true,
        trim: true,
    },subtitle: {
        type: String,
        required: true,
        trim: true,
    },dubbed: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: [String],
        required: true,
        trim: true,
    },
    status: {
        type: String,
        required: true,
        trim: true,
    },
    premiered: {
        type: String,
        required: true,
        trim: true,
    },
    language: {
        type: [String],
        required: true,
        trim: true,
    },
    studios: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: String,
        required: true,
        trim: true,
    },
    producers: {
        type: String,
        required: true,
        trim: true,
    },
})




const movieJson = new mongoose.model('api', jsonSchema);


module.exports = movieJson;
