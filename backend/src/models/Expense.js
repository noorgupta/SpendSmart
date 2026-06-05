const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 1,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Food",
        "Travel",
        "Health",
        "Education",
        "Shopping",
        "Bills",
        "Entertainment",
        "Other",
      ],
    },

    note: {
      type: String,
      trim: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;