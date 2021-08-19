const mongoose = require("mongoose");
const schema = mongoose.Schema;
const leadSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    conversion_status: {
      type: Boolean,
      required: true,
    },
    broadcast_status: {
      type: Boolean,
      required: true,
    },
    created_by: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Lead = mongoose.model("lead", leadSchema);
module.exports = Lead;
