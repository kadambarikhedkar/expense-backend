const express = require('express');
const router = express.Router();
const groupController = require("../controllers/groupController");
const appConfig = require("../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/groups`;
   app.post(`${baseUrl}/add`, groupController.groupControllerFunction);
   
   /**
	 * @api {post} /api/v1/groups/add Create group
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} groupName  groupName of the group passed as a body parameter
	 * @apiParam {date} createdOn createdOn of the group passed as a body parameter
	 * @apiParam {Object} createdBy createdBy of the group passed as a body parameter
	 * @apiParam {ObjectArray} users userId array of the group passed as a body parameter
	 * @apiParam {boolean} active active of the group passed as a body parameter

	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Group added successfully",
	    "status": 200,
	    "data": [
					{
						groupId: "string",
						groupName: "title",
						createdOn: date,
						createdBy: object,
						users: object(type = array),
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
	    "message": "Failed to create new Group",
	    "status": 500,
	    "data": null
	   }
	 */

   app.get(`${baseUrl}/list`, groupController.groupListControllerFunction);
   /**
	 * @api {get} /api/v1/groups/list/:userId list groups by userId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} userId userId of the user passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Group Details Found",
	    "status": 200,
	    "data": [
					{
						groupId: "string",
						groupName: "title",
						createdOn: date,
						createdBy: object,
						users: object(type = array),
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
	    "message": "Failed To Find group Details",
	    "status": 500,
	    "data": null
	   }
	 */
   app.get(`${baseUrl}/get`, groupController.getGroupDetail);

   /**
	 * @api {get} /api/v1/groups/get/:groupId get group by groupId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} groupId groupId of the user passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Group Details Found",
	    "status": 200,
	    "data": [
					{
						groupId: "string",
						groupName: "title",
						createdOn: date,
						createdBy: object,
						users: object(type = array),
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
	    "message": "Failed To Find group Details",
	    "status": 500,
	    "data": null
	   }
	 */

}
