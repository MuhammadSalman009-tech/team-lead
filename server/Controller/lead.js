const Lead = require("../Models/lead");
module.exports.create = async (req, res) => {
  const { leadName, leadCompany, leadDomain } = req.body;
  console.log(req.body);
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
      created_by: "12345678",
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
module.exports.getAll = async (req, res) => {
  const leads = await Lead.find();
  res.send(leads);
};
module.exports.updateConversion = async (req, res) => {
  try {
    const { conversion, id } = req.body;
    console.log(conversion, id);
    const lead = Lead.findById({ _id: id });
    res.send(lead);
    lead.conversion_status = conversion;
    const savedLead = await lead.save();
    res.status(200).json(savedLead);
  } catch (error) {
    console.log("update conversion server error");
    res.status(500).json({ msg: error.message });
  }
};
