//@desc    register new user
//@route   /api/user
//@access  public
const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  //Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please include all the fields");
  }

  res.send("user register");
};

//@desc    login a user
//@route   /api/user/login
//@access  public
const loginUser = (req, res) => {
  res.send("user login");
};

module.exports = { registerUser, loginUser };
