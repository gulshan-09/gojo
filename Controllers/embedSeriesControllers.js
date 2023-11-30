const seriesEmbedJson = require("../models/embedSeriesSchema")


exports.seriesembedjsonpost = async (req, res) => {
    const { id, embed_title, episodes} = req.body;
    

    if (!id || !embed_title || !episodes ) {
        res.status(400).json({ error: "All input required." });
        return;
    }

    try {
        const seriesid = await seriesEmbedJson.findOne({ id: id });

        if (seriesid) {
            res.status(400).json({ error: "ID exists in the database." });
        } else {
            const seriesEmbedJsonSave = new seriesEmbedJson({
                id, embed_title, episodes
            });

            await seriesEmbedJsonSave.save();
            res.status(200).json(seriesEmbedJsonSave);
        }

    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }
};



// get series embed data 


exports.getserisedata = async(req, res)=> {


    try {

        const getserisedata = await seriesEmbedJson.find()

        res.status(200).json(getserisedata)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}




// get data by id 


exports.getsingleseriesdata = async(req, res)=> {

    const {id} = req.params;

    try {

        const getsingleseriesdata = await seriesEmbedJson.findOne({id:id})

        res.status(200).json(getsingleseriesdata)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}



// delete single series data 


exports.deleteseriesdata = async(req, res)=> {

    const {id} = req.params;

    try {

        const deleteseriesdata = await seriesEmbedJson.findByIdAndDelete({_id:id})

        res.status(200).json(deleteseriesdata)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}






// update series data 



exports.updateseriesdata = async(req, res)=> {

    const {updateid} = req.params;
    
    const { id, embed_title, episodes} = req.body;

    try {

        const updateseriesdatabyid = await seriesEmbedJson.findByIdAndUpdate({_id:updateid},{
            id, embed_title, episodes
        }, {new:true})

        await updateseriesdatabyid.save()

        res.status(200).json(updateseriesdatabyid)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}