const User = require("../Models/user");
const bcrypt = require("bcrypt");
module.exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    if (!savedUser) {
      return res.send("user not created");
    }
    return res.send(savedUser);
  } catch (error) {
    console.log("Signup server error");
    res.status(500).json({ msg: error.message });
  }
};
module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ emailErr: "Please Enter Email Address" });
    }
    if (!password) {
      return res.status(400).json({ passwordErr: "Please Enter Password" });
    }
    //checking if the user exists in our db
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ emailErr: "User does not exits!" });
    } else {
      const isMatching = await bcrypt.compare(password, existingUser.password);
      if (isMatching) {
        //if all credentials are correct
        res.status(200).json({
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
        });
      } else {
        return res.status(400).json({ passwordErr: "Incorrect Password!" });
      }
    }
  } catch (error) {
    console.log("Signin server error");
    res.status(500).json({ msg: error.message });
  }
};
