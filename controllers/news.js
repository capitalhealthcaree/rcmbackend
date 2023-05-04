const nodemailer = require("nodemailer");
const DemoRequest = require("../model/demoRequest");

const welocome = (req, res) => {
	res.send("Welcome RCM APIs");
};

const createDemoRequest = async (req, res) => {
	const { name, phone, email, organization, numberOfPhysicians, message } =
		req.body;

	try {
		const demoData = await DemoRequest.create({
			name,
			phone,
			email,
			organization,
			numberOfPhysicians,
			message,
		});
		// Send an email to the admin
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "webdevelopercapital@gmail.com",
				pass: "ulgfizctvtqktylr",
			},
		});

		const mailOptions = {
			from: email,
			to: "webdevelopercapital@gmail.com",
			subject: "Demo Request Details",
			html: `
			<html>
			  <head>
				<style>
				  h1 {
					color: #003062;
				  }
				  p {
					font-size: 18px;
					line-height: 1.5;
				  }
				</style>
			  </head>
			  <body>
				<h1>Patient Details</h1>
				<p>Name : ${name}</p>
				<p>Email : ${email}</p>
				<p>organization : ${organization}</p>
				<p>Number Of Physicians : ${numberOfPhysicians}</p>
				<p>Contact Number : ${phone}</p>
				<p>Message : ${message}</p>
			  </body>
			</html>`,
		};

		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.error(err);
			} else {
				console.log(info);
			}
		});

		res
			.status(200)
			.json({ data: demoData, mesasge: "Demo reuqest sent successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getDemoRequestsByPagination = async (req, res) => {
	const page = parseInt(req.query.page) || 1; // default to first page if page is not specified
	const limit = parseInt(req.query.limit) || 21; // default to 10 documents per page if limit is not specified
	const startIndex = (page - 1) * limit;

	try {
		const totalDocs = await DemoRequest.countDocuments();
		const data = await DemoRequest.find().skip(startIndex).limit(limit);

		res.status(200).json({
			currentPage: page,
			totalPages: Math.ceil(totalDocs / limit),
			data,
		});
	} catch (err) {
		res.status(500).json({ err: "getting some error" });
	}
};

module.exports = {
	welocome,
	createDemoRequest,
	getDemoRequestsByPagination,
};
