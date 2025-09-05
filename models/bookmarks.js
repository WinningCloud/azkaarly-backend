import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema(
  {
    arabic: {
      type: String,
      required: true,
      trim: true,
    },
    translation: {
      type: String,
      required: true,
      trim: true,
    },
    count: {
      type: Number,
      required: true,
      default: 1,
    },
    userId: {
      type: String, // or mongoose.Schema.Types.ObjectId if you connect with Users
      required: false, // make it required if you want per-user bookmarks
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bookmark", bookmarkSchema);
