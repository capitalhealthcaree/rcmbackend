const express = require("express");
const bodyParser = require("body-parser");
const appPort = 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

// Database Connection
mongoose.connect(
	"mongodb+srv://ppbackend:Web786786@healthcarecluster.yhawahg.mongodb.net/mymedicalbillingrcm?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("connected", () => {
	console.log("db connected");
});
db.on("disconnected", (err, res) => {
	console.log("db disconnected", err, "###", res);
});

//All Routes
app.use("/api/v1", routes);

// Server
app.listen(appPort, () => {
	console.log(`Server running at http://localhost/:${appPort}/`);
});
