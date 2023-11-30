const downloadLinkJson = require("../models/downloadSchema")



exports.downloadJsonPost = async(req, res)=> {
    const {id, download_title, low, medium, high} = req.body;

    if(!id || !download_title || !low || !medium || !high){
        res.status(400).json({error:"All input required."})
    }

    try{
    
        const downloadid = await downloadLinkJson.findOne({id:id});

        if(downloadid){
            res.status(400).json({error:"ID exist in database."})
        }else{
            const downloadJsonSave = new downloadLinkJson({
                id, download_title, low, medium, high
            })

            await downloadJsonSave.save();
            res.status(200).json(downloadJsonSave)
        }

    }catch (error){
        res.status(400).json(error);
        console.log("Error");
    }

}





// get data 


exports.getdownlaodlinkdata = async(req, res)=> {


    try {

        const getdownlaodlinkdata = await downloadLinkJson.find()

        res.status(200).json(getdownlaodlinkdata)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}




// get data by id 


exports.getdownloadsingledata = async(req, res)=> {

    const {id} = req.params;

    try {

        const getdownloadsingledata = await downloadLinkJson.findOne({id:id})

        res.status(200).json(getdownloadsingledata)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}



// delete single movie data 


exports.deletedownloaddata = async(req, res)=> {

    const {id} = req.params;

    try {

        const deletedownloaddata = await downloadLinkJson.findByIdAndDelete({_id:id})

        res.status(200).json(deletedownloaddata)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}





// update movie data 



exports.updatedownloaddata = async(req, res)=> {

    const {updateid} = req.params;
    
    const {id, download_title, low, medium, high} = req.body;

    try {

        const updatedownloaddataid = await downloadLinkJson.findByIdAndUpdate({_id:updateid},{
            id, download_title, low, medium, high
        }, {new:true})

        await updatedownloaddataid.save()

        res.status(200).json(updatedownloaddataid)
        
    } catch (error) {
        res.status(400).json(error);
        console.log("Error");
    }

}