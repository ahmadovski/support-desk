const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requierd: [true, "plsese add a name"],
    },
    email: {
      type: String,
      requierd: [true, "plsese add an email"],
      unique: true,
    },
    password: {
      type: String,
      requierd: [true, "plsese add a password"],
    },
    isAdmin: {
      type: Boolean,
      requierd: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
