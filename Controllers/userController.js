
const movieJson = require('../models/jsonSchema');
// const moment = require('moment');

exports.userpost = async(req, res)=> {
    const {id, title, embed_title, sposter, bposter, type, duration, country, episodes, description, date, genre, status, premiered, language, studios, rating, producers} = req.body;

    if(!id || !title || !embed_title || !sposter || !bposter || !type || !duration || !country || !episodes || !description || !date || !genre || !status || !premiered || !language || !studios || !rating || !producers){
        res.status(400).json({error:"All input required."})
    }

    try{
    
        const preid = await movieJson.findOne({id:id});

        if(preid){
            res.status(400).json({error:"ID exist in database."})
        }else{
            const movieData = new movieJson({
                id, title, embed_title, sposter, bposter, type, duration, country, episodes, description, date, genre, status, premiered, language, studios, rating, producers
            })

            await movieData.save();
            res.status(200).json(movieData)
        }

    }catch (error){
        res.status(400).json(error);
        console.log("Error");
    }

}



// get all data 


exports.getdata = async(req, res)=> {


    try {

        const getData = await movieJson.find()

        res.status(200).json(getData)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}

// advance filter 


exports.advancedatafilter = async(req, res)=> {

    const keyword = req.query.keyword || "";
    const type = req.query.type || "";
    const country = req.query.country || "";
    const genre = req.query.genre || "";
    const date = req.query.date || "";
    const language = req.query.language || "";
    const status = req.query.status || "";
    const rating = req.query.rating || "";

    const query = {
        title:{$regex:keyword, $options:"i"},
        type:{$regex:type, $options:"i"},
        country:{$regex:country, $options:"i"},
        genre:{$regex:genre, $options:"i"},
        date:{$regex:date, $options:"i"},
        language:{$regex:language, $options:"i"},
        status:{$regex:status, $options:"i"},
        rating:{$regex:rating, $options:"i"},
    }

    try {

        const advancefilter = await movieJson.find(query)

        res.status(200).json(advancefilter)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}

// get data by id 


exports.getonedata = async(req, res)=> {

    const {id} = req.params;

    try {

        const getOneData = await movieJson.findOne({id:id})

        res.status(200).json(getOneData)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}


// delete user 


exports.deletedata = async(req, res)=> {

    const {id} = req.params;

    try {

        const deletedatabyid = await movieJson.findByIdAndDelete({_id:id})

        res.status(200).json(deletedatabyid)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}



// update data 

exports.updatedata = async(req, res)=> {

    const {dataid} = req.params;
    
    const {id, title, embed_title, sposter, bposter, type, duration, country, episodes, description, date, genre, status, premiered, language, studios, rating, producers} = req.body;

    try {

        const updatedatabyid = await movieJson.findByIdAndUpdate({_id:dataid},{
            id, title, embed_title, sposter, bposter, type, duration, country, episodes, description, date, genre, status, premiered, language, studios, rating, producers
        }, {new:true})

        await updatedatabyid.save()

        res.status(200).json(updatedatabyid)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}