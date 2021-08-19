const userAuth = (req, res, next) => {
  try {
    const { userID } = req.body;
    if (!userID) {
      return res
        .status(401)
        .json({ msg: "You need to login first, authorization denied" });
    }
    req.user = userID;
    next();
  } catch (err) {
    console.log("userAuthMiddleware error");
    res.status(500).json({ error: err.message });
  }
};
module.exports = userAuth;
