const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    summary: { type: String, required: true },
    content: { type: String, required: true }, // Will store HTML from the editor
    author: { type: String, required: true },
    authorAvatar: { type: String }, // URL for the author's image
    thumbnailUrl: { type: String, required: true }, // Small image for blog list
    heroImageUrl: { type: String, required: true }, // Large banner image
    heroPosition: {
      type: String,
      enum: ["Top", "Middle", "Bottom"],
      default: "Top",
    },
    tags: [{ type: String }],
    isPublic: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
