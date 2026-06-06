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
        const expenses = await Expenses.findById();

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
async function updateExpense(req,res){

    res.status(200).json({
        message: "Expense Updated Successfully"
    })

}
async function deleteExpense(req,res){

    res.status(200).json({
        message: "Expense Deleted successfully"
    })

}

module.exports = {
createExpense,
getExpenses,
getExpenseById,
updateExpense,
deleteExpense
};
