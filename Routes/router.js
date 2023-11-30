const express = require('express');
const router = new express.Router();


const controllers = require("../Controllers/userController")
const movieController = require("../Controllers/embedMovieController")
const seriesController = require("../Controllers/embedSeriesControllers")
const downloadLinkController = require("../Controllers/downloadController")


// routes

router.post("/api/v1/popular", controllers.userpost);
router.get("/api/v1/popular", controllers.getdata);
router.get("/filter", controllers.advancedatafilter);
router.get("/api/v1/popular/:id", controllers.getonedata);
router.delete("/api/v1/delete/:id", controllers.deletedata);
router.put("/api/v1/popular/update/:dataid", controllers.updatedata);



// movie embed controllers routes 


router.post("/embed/v1/popular/movie", movieController.movieembedjsonpost)
router.get("/embed/v1/popular/movie", movieController.getembeddata)
router.get("/embed/v1/popular/movie/:id", movieController.getembedsingledata)
router.delete("/embed/v1/delete/movie/:id", movieController.deletemoviedata)
router.put("/embed/v1/update/movie/:updateid", movieController.updatemoviedata)


 

// series embed controllers routes 


router.post("/embed/v1/popular/series", seriesController.seriesembedjsonpost)
router.get("/embed/v1/popular/series", seriesController.getserisedata)
router.get("/embed/v1/popular/series/:id", seriesController.getsingleseriesdata)
router.delete("/embed/v1/delete/series/:id", seriesController.deleteseriesdata)
router.put("/embed/v1/update/series/:updateid", seriesController.updateseriesdata)




// download link controller routes 



router.post("/download/v1/popular", downloadLinkController.downloadJsonPost)
router.get("/download/v1/popular", downloadLinkController.getdownlaodlinkdata)
router.get("/download/v1/popular/:id", downloadLinkController.getdownloadsingledata)
router.delete("/download/v1/delete/:id", downloadLinkController.deletedownloaddata)
router.put("/download/v1/update/:updateid", downloadLinkController.updatedownloaddata)





module.exports = router;