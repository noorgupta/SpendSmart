const Expense = require("../models/Expense");

async function createExpense(req,res){
    try{
        const expense = await Expense.create(req.body);

        res.status(201).json({
            success: true,
            data: expense,
        });
    }catch(err){
    res.status(500).json({
        success: false,
        message: err.message
    });
  }
}

async function getExpenses(req,res){
    try{
        const expenses = await Expense.find();

        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
async function getExpenseById(req,res){
    try{
        const expenses = await Expense.findById(req.params.id);

        res.status(200).json({
            success: true,
            data: expenses,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
       });
    }
}
async function updateExpense(req, res) {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      });
    }

    res.status(200).json({
      success: true,
      data: expense,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
async function deleteExpense(req,res){
  try{
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if(!expense){
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      })
    }
    res.status(200).json({
      success: true,
      message: "Expense deleted successfully",
    });
  }catch(error){
    res.status(500).json({
        success: false,
        message: error.message,
    });
  }
}

module.exports = {
createExpense,
getExpenses,
getExpenseById,
updateExpense,
deleteExpense
};
