const mongoose = require("mongoose");
const validatorLib = require("validator");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
      validate: (data) => {
        // if (data.length < 3) {
        //   throw new Error("Title must be at least 3 characters long");
        // }

        // for(let char of data) {
        //   if (!(/[a-zA-Z0-9 ]/.test(char))) {
        //     throw new Error("Title must be alphanumeric");
        //   }
        // }
        return validatorLib.isAlphanumeric(data); // values should not be &^^&&
      },
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      trim: true,
    },
    nationality: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);