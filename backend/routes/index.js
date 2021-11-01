const express = require("express")
const StoreService = require("../store-service")
const router = express.Router()

// Get all posts
router.get("/stores", async (req, res) => {
	//StoreService.get(req,res)
	console.log(req);
})
router.post("/store", async (req, res) => {
	console.log(req);
	//StoreService.create(req,res)
})

router.get("/version", async (req, res) => {
	const currVer =  [{
		version: "0.0.1",
		changeDate: "2021-10-25",
		comment: "initial Version"
	}];
	res.json(currVer)
})

module.exports = router