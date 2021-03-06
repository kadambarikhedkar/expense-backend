define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/expenses/add",
    "title": "Create expense",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expenseName",
            "description": "<p>expenseName of the expense passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>groupId of the expense passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>amount of the expense passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectArray",
            "optional": false,
            "field": "users",
            "description": "<p>userId array of the expense passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "paidBy",
            "description": "<p>userId of the expense passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Expense added successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\texpenseId: \"string\",\n\t\t\t\t\t\texpenseName: \"title\",\n\t\t\t\t\t\tgroup: object,\n\t\t\t\t\t\tamount: \"string\",\n\t\t\t\t\t\tusers: object(type = array),\n\t\t\t\t\t\tpaidBy: object\n\t\t\t\t\t\tactive:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to create new Expense\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "create",
    "name": "PostApiV1ExpensesAdd"
  },
  {
    "type": "post",
    "url": "/api/v1/groups/add",
    "title": "Create group",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupName",
            "description": "<p>groupName of the group passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "createdOn",
            "description": "<p>createdOn of the group passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "createdBy",
            "description": "<p>createdBy of the group passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectArray",
            "optional": false,
            "field": "users",
            "description": "<p>userId array of the group passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>active of the group passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Group added successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tgroupId: \"string\",\n\t\t\t\t\t\tgroupName: \"title\",\n\t\t\t\t\t\tcreatedOn: date,\n\t\t\t\t\t\tcreatedBy: object,\n\t\t\t\t\t\tusers: object(type = array),\n\t\t\t\t\t\tactive:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to create new Group\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/group.js",
    "groupTitle": "create",
    "name": "PostApiV1GroupsAdd"
  },
  {
    "type": "put",
    "url": "/api/v1/expenses/delete",
    "title": "inactive expense by expenseId",
    "version": "0.0.1",
    "group": "edit",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Expense edited successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\texpenseId: \"string\",\n\t\t\t\t\t\texpenseName: \"title\",\n\t\t\t\t\t\tgroup: object,\n\t\t\t\t\t\tamount: \"string\",\n\t\t\t\t\t\tusers: object(type = array),\n\t\t\t\t\t\tpaidBy: object\n\t\t\t\t\t\tactive:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to edit expense\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "edit",
    "name": "PutApiV1ExpensesDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/expenses/edit",
    "title": "Edit expense by expenseId",
    "version": "0.0.1",
    "group": "edit",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Expense edited successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\texpenseId: \"string\",\n\t\t\t\t\t\texpenseName: \"title\",\n\t\t\t\t\t\tgroup: object,\n\t\t\t\t\t\tamount: \"string\",\n\t\t\t\t\t\tusers: object(type = array),\n\t\t\t\t\t\tpaidBy: object\n\t\t\t\t\t\tactive:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to edit expense\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "edit",
    "name": "PutApiV1ExpensesEdit"
  },
  {
    "type": "post",
    "url": "/api/v1/users/sendLink",
    "title": "forget password",
    "version": "0.0.1",
    "group": "forget_password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Email sent successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId:\"String\",\n\t\t\t\t\t\tfirstName:\"String\",\n\t\t\t\t\t\tlastName:\"String\",\n\t\t\t\t\t\tpassword:\"String\",\n\t\t\t\t\t\temail:\"String\",\n\t\t\t\t\t\tcountryCode:\"String\",\n\t\t\t\t\t\tmobile:\"String\",\n\t\t\t\t\t\tcreatedOn:\"date\",\n\t\t\t\t\t\tcreatedBy:\"String\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Email not found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "forget_password",
    "name": "PostApiV1UsersSendlink"
  },
  {
    "type": "put",
    "url": "/api/v1/expenses/get/:groupId",
    "title": "get expense by groupId",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>groupId of the expense passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Expense Detail Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\texpenseId: \"string\",\n\t\t\t\t\t\texpenseName: \"title\",\n\t\t\t\t\t\tgroup: object,\n\t\t\t\t\t\tamount: \"string\",\n\t\t\t\t\t\tusers: object(type = array),\n\t\t\t\t\t\tpaidBy: object\n\t\t\t\t\t\tactive:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find expense Detail\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "get",
    "name": "PutApiV1ExpensesGetGroupid"
  },
  {
    "type": "put",
    "url": "/api/v1/expenses/history/:expenseId",
    "title": "get expense history by expenseId",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "expenseId",
            "description": "<p>expenseId of the expense history passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Expense history Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\texpenseHistoryId: \"string\",\n\t\t\t\t\t\texpenseId: object,\n\t\t\t\t\t\taction: object,\n\t\t\t\t\t\tdoneBy: \"string\",\n\t\t\t\t\t\ttime:\"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find expense history\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "get",
    "name": "PutApiV1ExpensesHistoryExpenseid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "login user",
    "version": "0.0.1",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find User Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "login",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "logout user",
    "version": "0.0.1",
    "group": "logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Logged Out Successfully\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t\t\t\t\tuserId:\"String\",\n\t\t\t\t\t\tfirstName:\"String\",\n\t\t\t\t\t\tlastName:\"String\",\n\t\t\t\t\t\tpassword:\"String\",\n\t\t\t\t\t\temail:\"String\",\n\t\t\t\t\t\tcountryCode:\"String\",\n\t\t\t\t\t\tmobile:\"String\",\n\t\t\t\t\t\tcreatedOn:\"date\",\n\t\t\t\t\t\tcreatedBy:\"String\"\n\t\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error occurred:\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "logout",
    "name": "PostApiV1UsersLogout"
  },
  {
    "type": "get",
    "url": "/api/v1/expenses/get/group/:groupId",
    "title": "list expenses by groupId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>groupId of the group passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Expense list Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\texpenseId: \"string\",\n\t\t\t\t\t\texpenseName: \"title\",\n\t\t\t\t\t\tgroup: object,\n\t\t\t\t\t\tamount: \"string\",\n\t\t\t\t\t\tusers: object(type = array),\n\t\t\t\t\t\tpaidBy: object\n\t\t\t\t\t\tactive:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find expense list\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "read",
    "name": "GetApiV1ExpensesGetGroupGroupid"
  },
  {
    "type": "get",
    "url": "/api/v1/expenses/list/:userId",
    "title": "list expenses by userId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Expense Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\texpenseId: \"string\",\n\t\t\t\t\t\texpenseName: \"title\",\n\t\t\t\t\t\tgroup: object,\n\t\t\t\t\t\tamount: \"string\",\n\t\t\t\t\t\tusers: object(type = array),\n\t\t\t\t\t\tpaidBy: object\n\t\t\t\t\t\tactive:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find expense Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/expense.js",
    "groupTitle": "read",
    "name": "GetApiV1ExpensesListUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/groups/get/:groupId",
    "title": "get group by groupId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>groupId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Group Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tgroupId: \"string\",\n\t\t\t\t\t\tgroupName: \"title\",\n\t\t\t\t\t\tcreatedOn: date,\n\t\t\t\t\t\tcreatedBy: object,\n\t\t\t\t\t\tusers: object(type = array),\n\t\t\t\t\t\tactive:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find group Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/group.js",
    "groupTitle": "read",
    "name": "GetApiV1GroupsGetGroupid"
  },
  {
    "type": "get",
    "url": "/api/v1/groups/list/:userId",
    "title": "list groups by userId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Group Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tgroupId: \"string\",\n\t\t\t\t\t\tgroupName: \"title\",\n\t\t\t\t\t\tcreatedOn: date,\n\t\t\t\t\t\tcreatedBy: object,\n\t\t\t\t\t\tusers: object(type = array),\n\t\t\t\t\t\tactive:boolean\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find group Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/group.js",
    "groupTitle": "read",
    "name": "GetApiV1GroupsListUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/get/:userId",
    "title": "Get user by userId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"getUserDdetails\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId:\"String\",\n\t\t\t\t\t\tfirstName:\"String\",\n\t\t\t\t\t\tlastName:\"String\",\n\t\t\t\t\t\tpassword:\"String\",\n\t\t\t\t\t\temail:\"String\",\n\t\t\t\t\t\tcountryCode:\"String\",\n\t\t\t\t\t\tmobile:\"String\",\n\t\t\t\t\t\tcreatedOn:\"date\",\n\t\t\t\t\t\tcreatedBy:\"String\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error occurred\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "read",
    "name": "GetApiV1UsersGetUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/list/:userId",
    "title": "Get user list by createdBy",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"get user list by created by\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId:\"String\",\n\t\t\t\t\t\tfirstName:\"String\",\n\t\t\t\t\t\tlastName:\"String\",\n\t\t\t\t\t\tpassword:\"String\",\n\t\t\t\t\t\temail:\"String\",\n\t\t\t\t\t\tcountryCode:\"String\",\n\t\t\t\t\t\tmobile:\"String\",\n\t\t\t\t\t\tcreatedOn:\"date\",\n\t\t\t\t\t\tcreatedBy:\"String\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error occurred\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "read",
    "name": "GetApiV1UsersListUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:userId",
    "title": "Get user by userId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"getUserDdetails\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId:\"String\",\n\t\t\t\t\t\tfirstName:\"String\",\n\t\t\t\t\t\tlastName:\"String\",\n\t\t\t\t\t\tpassword:\"String\",\n\t\t\t\t\t\temail:\"String\",\n\t\t\t\t\t\tcountryCode:\"String\",\n\t\t\t\t\t\tmobile:\"String\",\n\t\t\t\t\t\tcreatedOn:\"date\",\n\t\t\t\t\t\tcreatedBy:\"String\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error occurred\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "read",
    "name": "GetApiV1UsersUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Sign up user",
    "version": "0.0.1",
    "group": "sign_up",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to create new User\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "sign_up",
    "name": "PostApiV1UsersSignup"
  }
] });
