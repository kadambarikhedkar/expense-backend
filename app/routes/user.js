const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;
    app.post(`${baseUrl}/sendLink`, userController.forgetPasswordFunction);

    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    app.post(`${baseUrl}/login`, userController.loginFunction);

    app.post(`${baseUrl}/logout`, userController.logout);

    app.post(`${baseUrl}/invite`, userController.createInvitedUser);
    app.get(`${baseUrl}/checkEmail`, userController.checkEmail);
    app.put(`${baseUrl}/updatePassword`, userController.updatePassword);

    app.get(`${baseUrl}/list`, userController.listFriends);

    app.get(`${baseUrl}/get`, userController.userDetails);

    app.get(`${baseUrl}/get/id`, userController.userDetailsByObjectId);

}
