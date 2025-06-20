const bcrypt = require("bcrypt");
const User = require("../model/UserModel");
const saltRounds = 10;

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  // hash the pw format per documentation
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = {
    name,
    // photo,
    email,
    password: hashedPassword,
  };
  console.log(newUser);

  const result = await User.create(newUser);
  res.send({
    data: result,
    status: 200,
    message: "user created successfully",
  });
};

// usr signin
const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    // send message to frontend
    return res.status(404).send({ status: 404, message: "user not found" });
  }
  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (isPasswordMatched) {
    res.send({
      data: user,
      status: 200,
      message: "user logged in successfully",
    });
  } else {
    res.status(404).send({ status: 404, message: "invalid credential" });
  }
};


module.exports = {
  signup,
  signin,
};
