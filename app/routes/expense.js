const express = require('express');
const router = express.Router();
const expenseController = require("../controllers/expenseController");
const appConfig = require("../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/expenses`;
    app.post(`${baseUrl}/add`, expenseController.addExpense);
	 /**
	 * @api {post} /api/v1/expenses/add Create expense
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} expenseName  expenseName of the expense passed as a body parameter
	 * @apiParam {Object} group groupId of the expense passed as a body parameter
	 * @apiParam {String} amount amount of the expense passed as a body parameter
	 * @apiParam {ObjectArray} users userId array of the expense passed as a body parameter
	 * @apiParam {Object} paidBy userId of the expense passed as a body parameter

	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Expense added successfully",
	    "status": 200,
	    "data": [
					{
						expenseId: "string",
						expenseName: "title",
						group: object,
						amount: "string",
						users: object(type = array),
						paidBy: object
						active:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to create new Expense",
	    "status": 500,
	    "data": null
	   }
	 */

	
	
    app.get(`${baseUrl}/list`, expenseController.listExpense);
	
	 /**
	 * @api {get} /api/v1/expenses/list/:userId list expenses by userId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} userId userId of the user passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Expense Details Found",
	    "status": 200,
	    "data": [
					{
						expenseId: "string",
						expenseName: "title",
						group: object,
						amount: "string",
						users: object(type = array),
						paidBy: object
						active:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find expense Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/get`, expenseController.getExpenseDetail);
	/**
	 * @api {put} /api/v1/expenses/get/:groupId get expense by groupId
	 * @apiVersion 0.0.1
	 * @apiGroup get
	 *
	 * @apiParam {String} groupId groupId of the expense passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Expense Detail Found",
	    "status": 200,
	    "data": [
					{
						expenseId: "string",
						expenseName: "title",
						group: object,
						amount: "string",
						users: object(type = array),
						paidBy: object
						active:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find expense Detail",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(`${baseUrl}/get/group`, expenseController.getExpenseList);
		 /**
	 * @api {get} /api/v1/expenses/get/group/:groupId list expenses by groupId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} groupId groupId of the group passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Expense list Found",
	    "status": 200,
	    "data": [
					{
						expenseId: "string",
						expenseName: "title",
						group: object,
						amount: "string",
						users: object(type = array),
						paidBy: object
						active:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find expense list",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/history`, expenseController.getExpenseHistory);
	/**
	 * @api {put} /api/v1/expenses/history/:expenseId get expense history by expenseId
	 * @apiVersion 0.0.1
	 * @apiGroup get
	 *
	 * @apiParam {object} expenseId expenseId of the expense history passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Expense history Found",
	    "status": 200,
	    "data": [
					{
						expenseHistoryId: "string",
						expenseId: object,
						action: object,
						doneBy: "string",
						time:"date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find expense history",
	    "status": 500,
	    "data": null
	   }
	 */
    app.put(`${baseUrl}/edit`, expenseController.editExpenseDetail);
	/**
	 * @api {put} /api/v1/expenses/edit Edit expense by expenseId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Expense edited successfully",
	    "status": 200,
	    "data": [
					{
						expenseId: "string",
						expenseName: "title",
						group: object,
						amount: "string",
						users: object(type = array),
						paidBy: object
						active:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to edit expense",
	    "status": 500,
	    "data": null
	   }
	 */
    app.put(`${baseUrl}/delete`, expenseController.deleteExpenseDetail);
	/**
	 * @api {put} /api/v1/expenses/delete inactive expense by expenseId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Expense edited successfully",
	    "status": 200,
	    "data": [
					{
						expenseId: "string",
						expenseName: "title",
						group: object,
						amount: "string",
						users: object(type = array),
						paidBy: object
						active:boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to edit expense",
	    "status": 500,
	    "data": null
	   }
	 */
}
