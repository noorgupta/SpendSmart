
async function createExpense(req,res){

    res.status(201).json({
        message: "Expense created successfully"
    })


}
async function getExpenses(req,res){

    res.status(200).json({
        message: "All Expenses"
    })

}
async function getExpenseById(req,res){

    res.status(200).json({
        message: "Expense"
    })

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
