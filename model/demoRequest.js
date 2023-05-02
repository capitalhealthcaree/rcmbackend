const mongoose = require("mongoose");

const demoRequestSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		phone: { type: String, required: true },
		email: { type: String, required: true },
		organization: { type: String, required: true },
		numberOfPhysicians: { type: Number, required: true },
		message: { type: String, required: true },
	},
	{ timestamps: true }
);
const DemoRequest = mongoose.model("demoRequest", demoRequestSchema);
module.exports = DemoRequest;
