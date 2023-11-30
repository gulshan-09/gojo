const movieEmbedJson = require("../models/embedMovieSchema")



exports.movieembedjsonpost = async(req, res)=> {
    const {id, embed_title, myCloud, fileMoon, vTube, superEmbed, embed, vidPlay1, vidPlay2} = req.body;

    if(!id || !embed_title || !myCloud || !fileMoon || !vTube || !superEmbed || !embed || !vidPlay1 || !vidPlay2){
        res.status(400).json({error:"All input required."})
    }

    try{
    
        const preid = await movieEmbedJson.findOne({id:id});

        if(preid){
            res.status(400).json({error:"ID exist in database."})
        }else{
            const movieEmbedJsonSave = new movieEmbedJson({
                id, embed_title, myCloud, fileMoon, vTube, superEmbed, embed, vidPlay1, vidPlay2
            })

            await movieEmbedJsonSave.save();
            res.status(200).json(movieEmbedJsonSave)
        }

    }catch (error){
        res.status(400).json(error);
        console.log("Error");
    }

}







// get data 


exports.getembeddata = async(req, res)=> {


    try {

        const getembeddata = await movieEmbedJson.find()

        res.status(200).json(getembeddata)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}


// get data by id 


exports.getembedsingledata = async(req, res)=> {

    const {id} = req.params;

    try {

        const getembedsingledata = await movieEmbedJson.findOne({id:id})

        res.status(200).json(getembedsingledata)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}



// delete single movie data 


exports.deletemoviedata = async(req, res)=> {

    const {id} = req.params;

    try {

        const deletemoviedata = await movieEmbedJson.findByIdAndDelete({_id:id})

        res.status(200).json(deletemoviedata)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}




// update movie data 



exports.updatemoviedata = async(req, res)=> {

    const {updateid} = req.params;
    
    const {id, embed_title, myCloud, fileMoon, vTube, superEmbed, embed, vidPlay1, vidPlay2} = req.body;

    try {

        const updatemoviedatabyid = await movieEmbedJson.findByIdAndUpdate({_id:updateid},{
            id, embed_title, myCloud, fileMoon, vTube, superEmbed, embed, vidPlay1, vidPlay2
        }, {new:true})

        await updatemoviedatabyid.save()

        res.status(200).json(updatemoviedatabyid)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}