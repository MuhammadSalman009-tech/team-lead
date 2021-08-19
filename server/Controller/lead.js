const Lead = require("../Models/lead");
module.exports.create = async (req, res) => {
  const { leadName, leadCompany, leadDomain } = req.body;
  try {
    if (!leadName) {
      return res.status(400).json({ nameErr: "Please Enter Lead Name" });
    }
    if (!leadCompany) {
      return res.status(400).json({ companyErr: "Please Enter Lead Company" });
    }
    if (!leadDomain) {
      return res.status(400).json({ domainErr: "Please Enter Lead Domain" });
    }

    const lead = new Lead({
      name: leadName,
      company: leadCompany,
      domain: leadDomain,
      conversion_status: false,
      broadcast_status: false,
      created_by: req.user,
    });
    const savedLead = await lead.save();
    if (!savedLead) {
      return res.send("lead not created");
    }
    return res.send(savedLead);
  } catch (error) {
    console.log("create lead server error");
    res.status(500).json({ msg: error.message });
  }
};
module.exports.getAllLeads = async (req, res) => {
  const leads = await Lead.find({ created_by: req.user });
  res.send(leads);
};
module.exports.getAllBroadCatedLeads = async (req, res) => {
  const broadcastedLeads = await Lead.find({
    broadcast_status: true,
  }).exec();
  res.send(broadcastedLeads);
};
module.exports.updateConversion = async (req, res) => {
  try {
    const { conversion } = req.body;
    const id = req.params.id;
    const lead = await Lead.findById(String(id));
    lead.conversion_status = conversion;
    const savedLead = await lead.save();
    res.status(200).json(savedLead);
  } catch (error) {
    console.log("update conversion server error");
    res.status(500).json({ msg: error.message });
  }
};
module.exports.updateBroadCast = async (req, res) => {
  try {
    const { broadcast } = req.body;
    const id = req.params.id;
    const lead = await Lead.findById(String(id));
    lead.broadcast_status = broadcast;
    const savedLead = await lead.save();
    res.status(200).json(savedLead);
  } catch (error) {
    console.log("update conversion server error");
    res.status(500).json({ msg: error.message });
  }
};
