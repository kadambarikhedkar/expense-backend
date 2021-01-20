const express = require('express');
const router = express.Router();
const expenseController = require("../controllers/expenseController");
const appConfig = require("../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/expenses`;
    app.post(`${baseUrl}/add`, expenseController.addExpense);
    app.get(`${baseUrl}/list`, expenseController.listExpense);
    app.get(`${baseUrl}/get`, expenseController.getExpenseDetail);
    app.get(`${baseUrl}/get/group`, expenseController.getExpenseList);
    app.get(`${baseUrl}/history`, expenseController.getExpenseHistory);
    app.put(`${baseUrl}/edit`, expenseController.editExpenseDetail);
    app.put(`${baseUrl}/delete`, expenseController.deleteExpenseDetail);

}
