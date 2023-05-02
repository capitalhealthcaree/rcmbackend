const express = require("express");
const demoRequest = require("../controllers/demoRequest");
const router = express.Router();

router.get("/", demoRequest.welocome);
router.post("/createDemoRequest", demoRequest.createDemoRequest);
router.get(
	"/getDemoRequestsByPagination",
	demoRequest.getDemoRequestsByPagination
);

module.exports = router;
