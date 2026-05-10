import mongoose from "mongoose";

const BugSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    severity: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    summary: {
      type: String,
      required: true,
    },

    suggestedFix: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Bug ||
  mongoose.model("Bug", BugSchema);