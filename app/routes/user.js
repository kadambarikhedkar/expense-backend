const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;
    app.post(`${baseUrl}/sendLink`, userController.forgetPasswordFunction);
	
	/**
	 * @api {post} /api/v1/users/sendLink forget password
	 * @apiVersion 0.0.1
	 * @apiGroup forget password
	 *
	 * @apiParam {String} email  email of the user passed as a body parameter

	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Email sent successfully",
	    "status": 200,
	    "data": [
					{
						userId:"String",
						firstName:"String",
						lastName:"String",
						password:"String",
						email:"String",
						countryCode:"String",
						mobile:"String",
						createdOn:"date",
						createdBy:"String"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Email not found",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(`${baseUrl}/signup`, userController.signUpFunction);
	/**
	 * @api {post} /api/v1/users/signup Sign up user
	 * @apiVersion 0.0.1
	 * @apiGroup sign up
	 *
	 * @apiParam {String} firstName  firstName of the user passed as a body parameter
	 * @apiParam {String} lastName  lastName of the user passed as a body parameter
	 * @apiParam {String} email  email of the user passed as a body parameter
	 * @apiParam {String} countryCode countryCode of the user passed as a body parameter
	 * @apiParam {String} mobileNumber mobileNumber of the user passed as a body parameter
	 * @apiParam {String} password password of the user passed as a body parameter


	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to create new User",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(`${baseUrl}/login`, userController.loginFunction);
	
	/**
	 * @api {post} /api/v1/users/login login user
	 * @apiVersion 0.0.1
	 * @apiGroup login
	 *
	 * @apiParam {String} email  email of the user passed as a body parameter
	 * @apiParam {String} password  password of the user passed as a body parameter


	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find User Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(`${baseUrl}/logout`, userController.logout);
	/**
	 * @api {post} /api/v1/users/logout logout user
	 * @apiVersion 0.0.1
	 * @apiGroup logout
	 *
	 * @apiParam {String} userId  userId of the user passed as a body parameter
*
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Logged Out Successfully",
	    "status": 200,
	    "data": {
					userId:"String",
						firstName:"String",
						lastName:"String",
						password:"String",
						email:"String",
						countryCode:"String",
						mobile:"String",
						createdOn:"date",
						createdBy:"String"
					}
	    	}
		}
	}

	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error occurred:",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(`${baseUrl}/invite`, userController.createInvitedUser);
	
    app.get(`${baseUrl}/checkEmail`, userController.checkEmail);
	
    app.put(`${baseUrl}/updatePassword`, userController.updatePassword);

    app.get(`${baseUrl}/list`, userController.listFriends);
 /**
	 * @api {get} /api/v1/users/list/:userId Get user list by createdBy
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} userId userId of the user passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "get user list by created by",
	    "status": 200,
	    "data": [
					{
						userId:"String",
						firstName:"String",
						lastName:"String",
						password:"String",
						email:"String",
						countryCode:"String",
						mobile:"String",
						createdOn:"date",
						createdBy:"String"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error occurred",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/get`, userController.userDetails);
	 /**
	 * @api {get} /api/v1/users/get/:userId Get user by userId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} userId userId of the user passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "getUserDdetails",
	    "status": 200,
	    "data": [
					{
						userId:"String",
						firstName:"String",
						lastName:"String",
						password:"String",
						email:"String",
						countryCode:"String",
						mobile:"String",
						createdOn:"date",
						createdBy:"String"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error occurred",
	    "status": 500,
	    "data": null
	   }
	 */


    app.get(`${baseUrl}/get/id`, userController.userDetailsByObjectId);
	 /**
	 * @api {get} /api/v1/users/:userId Get user by userId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} userId userId of the user passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "getUserDdetails",
	    "status": 200,
	    "data": [
					{
						userId:"String",
						firstName:"String",
						lastName:"String",
						password:"String",
						email:"String",
						countryCode:"String",
						mobile:"String",
						createdOn:"date",
						createdBy:"String"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error occurred",
	    "status": 500,
	    "data": null
	   }
	 */

}
