const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    patientType: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);
const Appointment = mongoose.model("appointment", appointmentSchema);
module.exports = Appointment;
