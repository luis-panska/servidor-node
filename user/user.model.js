const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Quitar password del objeto
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  const { password, __v, createdAt, updatedAt, ...userRefactor } = userObject;
  return { ...userRefactor, id: userRefactor._id };
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
