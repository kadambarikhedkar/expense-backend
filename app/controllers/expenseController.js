const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib')
var mail = require('../../config/mail');

const ExpenseModel = mongoose.model('Expense')
const ExpenseHistoryModel = mongoose.model('ExpenseHistory')

let addExpense = (req, res) => {
    return new Promise((resolve, reject) => {

        let newExpense = new ExpenseModel({
            expenseId: shortid.generate(),
            expenseName: req.body.expenseName,
            group: req.body.groups,
            amount: req.body.amount,
            users: req.body.users,
            paidBy: req.body.paidBy

        })

        newExpense.save((err, newExpense) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'expenseController: Create Expense', 10)
                let apiResponse = response.generate(true, 'Failed to create new Expense', 500, null)
                reject(apiResponse)
            } else {
                let newExpenseObj = newExpense.toObject();
                let apiResponse = response.generate(false, 'Expense added successfully', 200, newExpenseObj)
                
                historyAdd("Create expense",newExpense,req.body.createdBy);
                mail.sendMail(req.body.emailArr.toString(),"Expense added","Expense added by"+req.body.createdByName);
                res.send(apiResponse)
            }
        })
    });
}

let historyAdd = (message,newExpense,_id) => {
    let newHistoryExpense = new ExpenseHistoryModel({
        expenseHistoryId: shortid.generate(),
        expenseId: newExpense,
        action:message,
        doneBy:_id,
        time: time.now()
    })

    newHistoryExpense.save((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'expenseController: Create Expense', 10)

        } else {
           console.log(result)
        }

    })
}


let listExpense = (req, res) => {
    ExpenseModel.find({
        'users': {
            $in: [
                mongoose.Types.ObjectId(req.query.userId)
            ]
        }
    }, function (err, result) {

        if (err) {
            console.log(err)
            logger.error(err.message, 'Expense Controller: getAllExpenses', 10)
            let apiResponse = response.generate(true, 'Failed To Find expense Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No expense Found', 'Expense Controller: getAllExpenses')
            let apiResponse = response.generate(true, 'No Expense Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Expense Details Found', 200, result)
            res.send(apiResponse)
        }
    })
}
let getExpenseDetail = (req, res) => {
    let findQuery = {}
    findQuery['expenseId'] = req.query.expenseId;

    ExpenseModel.find(findQuery)
        .select('-__v')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Expense Controller: get expense detail', 10)
                let apiResponse = response.generate(true, 'Failed To Find expense Detail', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No expense detail Found', 'Expense Controller: get expense detail')
                let apiResponse = response.generate(true, 'No Expense detail Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Expense Detail Found', 200, result)
                res.send(apiResponse)
            }
        })
}
let getExpenseList = (req, res) => {
    ExpenseModel.find({
        'group': mongoose.Types.ObjectId(req.query.groupId)
    }, function (err, result) {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Expense List Controller: get expense list', 10)
                let apiResponse = response.generate(true, 'Failed To Find expense list', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No expense history Found', 'Expense list Controller: get expense list')
                let apiResponse = response.generate(true, 'No Expense list Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Expense list Found', 200, result)
                res.send(apiResponse)
            }
        })
}

let getExpenseHistory = (req, res) => {
    ExpenseHistoryModel.find({
        'expenseId': mongoose.Types.ObjectId(req.query.expenseId)
    }, function (err, result) {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Expense History Controller: get expense history', 10)
                let apiResponse = response.generate(true, 'Failed To Find expense history', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No expense history Found', 'Expense History Controller: get expense detail')
                let apiResponse = response.generate(true, 'No Expense history Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Expense history Found', 200, result)
                res.send(apiResponse)
            }
        })
}

let editExpenseDetail = (req, res) => {
    return new Promise((resolve, reject) => {
    ExpenseModel.findOneAndUpdate({ expenseId: req.body.expenseId }, req.body, { multi: true }).exec((err, newExpense) => {

            if (err) {
                console.log(err)
                logger.error(err.message, 'expenseController: Edit Expense', 10)
                let apiResponse = response.generate(true, 'Failed to edit expense', 500, null)
                reject(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Expense edited successfully', 200, newExpense)
                historyAdd("Update expense",newExpense,req.body.createdBy);
                mail.sendMail(req.body.emailArr.toString(),"Expense deleted","Expense deleted by"+req.body.createdByName);

                res.send(apiResponse)
            }
        })
    });
}
let deleteExpenseDetail = (req, res) => {
    return new Promise((resolve, reject) => {
    ExpenseModel.findOneAndUpdate({ expenseId: req.body.expenseId }, req.body, { multi: true }).exec((err, newExpense) => {

            if (err) {
                console.log(err)
                logger.error(err.message, 'expenseController: Edit Expense', 10)
                let apiResponse = response.generate(true, 'Failed to edit expense', 500, null)
                reject(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Expense edited successfully', 200, newExpense)
                historyAdd("Deleted expense",newExpense,req.body.createdBy);
                mail.sendMail(req.body.emailArr.toString(),"Expense deleted","Expense deleted by"+req.body.createdByName);

                res.send(apiResponse)
            }
        })
    });
}
module.exports = {

    addExpense: addExpense,
    listExpense: listExpense,
    getExpenseDetail: getExpenseDetail,
    editExpenseDetail: editExpenseDetail,
    getExpenseHistory:getExpenseHistory,
    deleteExpenseDetail:deleteExpenseDetail,
    getExpenseList:getExpenseList
}