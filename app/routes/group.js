const express = require('express');
const router = express.Router();
const groupController = require("../controllers/groupController");
const appConfig = require("../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/groups`;
   app.post(`${baseUrl}/add`, groupController.groupControllerFunction);

   app.get(`${baseUrl}/list`, groupController.groupListControllerFunction);

   app.get(`${baseUrl}/get`, groupController.getGroupDetail);

}
