const express = require("express");
const demoRequest = require("../controllers/demoRequest");
const router = express.Router();

router.get("/demo", demoRequest.welocome);
router.post("/demo/createDemoRequest", demoRequest.createDemoRequest);
router.get(
	"/demo/getDemoRequestsByPagination",
	demoRequest.getDemoRequestsByPagination
);

module.exports = router;
