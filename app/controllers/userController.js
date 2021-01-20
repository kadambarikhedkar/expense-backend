const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const passwordLib = require('./../libs/generatePasswordLib');
const token = require('../libs/tokenLib')
var mail = require('../../config/mail');

const UserModel = mongoose.model('User')
const AuthModel = mongoose.model('Auth')


let signUpFunction = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                if (!validateInput.Email(req.body.email)) {
                    let apiResponse = response.generate(true, 'Email Does not meet the requirement', 400, null)
                    reject(apiResponse)
                } else if (check.isEmpty(req.body.password)) {
                    let apiResponse = response.generate(true, '"password" parameter is missing"', 400, null)
                    reject(apiResponse)
                } else {
                    resolve(req)
                }
            } else {
                logger.error('Field Missing During User Creation', 'userController: createUser()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let createUser = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ email: req.body.email })
                .exec((err, retrievedUserDetails) => {
                    if (err) {
                        logger.error(err.message, 'userController: createUser', 10)
                        let apiResponse = response.generate(true, 'Failed To Create User', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(retrievedUserDetails)) {
                        let id = shortid.generate();
                        let newUser = new UserModel({
                            userId: id,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName || '',
                            email: req.body.email.toLowerCase(),
                            countryCode: req.body.countryCode,
                            mobileNumber: req.body.mobileNumber,
                            password: passwordLib.hashpassword(req.body.password),
                            createdOn: time.now(),
                            createdBy: id
                        })
                        newUser.save((err, newUser) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'userController: createUser', 10)
                                let apiResponse = response.generate(true, 'Failed to create new User', 500, null)
                                reject(apiResponse)
                            } else {
                                let newUserObj = newUser.toObject();
                                resolve(newUserObj)
                            }
                        })
                    } else {
                        logger.error('User Cannot Be Created.User Already Present', 'userController: createUser', 4)
                        let apiResponse = response.generate(true, 'User Already Present With this Email', 403, null)
                        reject(apiResponse)
                    }
                })
        })
    }


    validateUserInput(req, res)
        .then(createUser)
        .then((resolve) => {
            delete resolve.password
            let apiResponse = response.generate(false, 'User created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })


}
let checkEmail = (email) => {

    UserModel.findOne(email)
        .exec((err, retrievedUserDetails) => {
            if (err) {
                logger.error(err.message, 'userController: createUser', 10)
                return err;
            }
            else {
                return retrievedUserDetails
            }
        })
}
let forgetPasswordFunction = (req, res) => {
    return new Promise((resolve, reject) => {
        let data = {
            email: req.body.email
        }
        if (req.body.email) {
            if (!validateInput.Email(req.body.email)) {
                let apiResponse = response.generate(true, 'Email Does not meet the requirement', 400, null)
                reject(apiResponse)
            }
            else {
                UserModel.findOne(data)
                    .exec((err, retrievedUserDetails) => {
                        if (err) {
                            console.log(err)
                            let apiResponse = response.generate(false, 'Email not found', 500, null)
                            res.send(apiResponse)
                        }
                        else {
                            if (retrievedUserDetails == null) {
                                let apiResponse = response.generate(false, 'Email not found', 500, null)
                                res.send(apiResponse)
                            } else {
                                mail.sendHtmlMail(req.body.email, "Forget password link");
                                let apiResponse = response.generate(false, 'Email sent successfully', 200, retrievedUserDetails)
                                res.send(apiResponse)
                            }

                        }

                    });




            }
        }
    });
}



let loginFunction = (req, res) => {

    let findUser = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {

                UserModel.findOne({ email: req.body.email }, (err, userDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error('Failed To Retrieve User Data', 'userController: findUser()', 10)
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userDetails)) {
                        logger.error('No User Found', 'userController: findUser()', 7)
                        let apiResponse = response.generate(true, 'No User Details Found', 404, null)
                        reject(apiResponse)
                    } else {
                        logger.info('User Found', 'userController: findUser()', 10)
                        resolve(userDetails)
                    }
                });

            } else {
                let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }
    let validatePassword = (retrievedUserDetails) => {
        console.log("validatePassword");
        return new Promise((resolve, reject) => {
            passwordLib.comparePassword(req.body.password, retrievedUserDetails.password, (err, isMatch) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'userController: validatePassword()', 10)
                    let apiResponse = response.generate(true, 'Login Failed', 500, null)
                    reject(apiResponse)
                } else if (isMatch) {
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
                } else {
                    logger.info('Login Failed Due To Invalid Password', 'userController: validatePassword()', 10)
                    let apiResponse = response.generate(true, 'Wrong Password.Login Failed', 400, null)
                    reject(apiResponse)
                }
            })
        })
    }

    let generateToken = (userDetails) => {
        console.log("generate token");
        return new Promise((resolve, reject) => {
            token.generateToken(userDetails, (err, tokenDetails) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else {
                    tokenDetails.userId = userDetails.userId
                    tokenDetails.userDetails = userDetails
                    resolve(tokenDetails)
                }
            })
        })
    }


    findUser(req, res)
        .then(validatePassword)
        .then(generateToken)
        .then(saveToken)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Login Successful', 200, resolve)
            res.status(200)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.status(err.status)
            res.send(err)
        })

}
let createInvitedUser = (req, res) => {

    return new Promise((resolve, reject) => {
        let newUser = new UserModel({
            userId: shortid.generate(),
            firstName: req.body.firstName,
            email: req.body.emailId,

            createdOn: time.now(),
            createdBy: req.body.createdBy


        })

        newUser.save((err, newUser) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'userController: createUser', 10)
                let apiResponse = response.generate(true, 'Failed to create new User', 500, null)
                reject(apiResponse)
            } else {
                let newUserObj = newUser.toObject();
                let apiResponse = response.generate(false, 'User added successfully', 200, newUserObj)
                console.log(apiResponse)
                res.send(apiResponse)
            }
        })



    });

}

let listFriends = (req, res) => {
    return new Promise((resolve, reject) => {
        let findQuery = {}

        findQuery['createdBy'] = req.query.userId;

        UserModel.find(findQuery)
            .select('-__v')
            .lean()
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'User Controller: list friends', 10)
                    let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Friends Found', 'User Controller: list friends')
                    let apiResponse = response.generate(true, 'No Friend Found', 404, null)
                    reject(apiResponse)
                } else {
                    console.log('friend found and listed.')
                    let apiResponse = response.generate(false, 'Friends found', 200, result)
                    res.send(apiResponse)
                }
            })
    })
}

let userDetails = (req, res) => {
    return new Promise((resolve, reject) => {
        let findQuery = {}

        findQuery['userId'] = req.query.userId;

        UserModel.find(findQuery)
            .select('-__v')
            .lean()
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'User Controller: getUserDdetails', 10)
                    let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Friends Found', 'User Controller: getUserDdetails')
                    let apiResponse = response.generate(true, 'No Friend Found', 404, null)
                    reject(apiResponse)
                } else {
                    console.log('friend found and listed.')
                    let apiResponse = response.generate(false, 'getUserDdetails', 200, result)
                    res.send(apiResponse)
                }
            })
    })
}

let userDetailsByObjectId = (req, res) => {
    return new Promise((resolve, reject) => {
        let findQuery = {}
        findQuery['_id'] = req.query.userId;

        UserModel.find(findQuery)
            .select('-__v')
            .lean()
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'User Controller: getUserDdetails', 10)
                    let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Friends Found', 'User Controller: getUserDdetails')
                    let apiResponse = response.generate(true, 'No Friend Found', 404, null)
                    reject(apiResponse)
                } else {
                    console.log('friend found and listed.')
                    let apiResponse = response.generate(false, 'getUserDdetails', 200, result)
                    res.send(apiResponse)
                }
            })
    })
}

let updatePassword = (req, res) => {
    return new Promise((resolve, reject) => {
        UserModel.findOneAndUpdate({ email: req.body.email }, passwordLib.hashpassword(req.body.password), { multi: true }).exec((err, newExpense) => {
    
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'UserController: Update Password', 10)
                    let apiResponse = response.generate(true, 'Failed to update password', 500, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Password updated successfully', 200, newExpense)    
                    res.send(apiResponse)
                }
            })
        });
}
let logout = (req, res) => {
    AuthModel.findOneAndRemove({ userId: req.body.userId }, (err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'user Controller: logout', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Already Logged Out or Invalid UserId', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Logged Out Successfully', 200, null)
            res.send(apiResponse)
        }
    })
}
let saveToken = (tokenDetails) => {
    return new Promise((resolve, reject) => {
        AuthModel.findOne({ userId: tokenDetails.userId }, (err, retrievedTokenDetails) => {
            if (err) {
                console.log(err.message, 'userController: saveToken', 10)
                let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                reject(apiResponse)
            } else if (check.isEmpty(retrievedTokenDetails)) {
                let newAuthToken = new AuthModel({
                    userId: tokenDetails.userId,
                    authToken: tokenDetails.token,
                    tokenSecret: tokenDetails.tokenSecret,
                    tokenGenerationTime: time.now()
                })

                newAuthToken.save((err, newTokenDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'userController: saveToken', 10)
                        let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                        reject(apiResponse)
                    } else {
                        let responseBody = {
                            authToken: newTokenDetails.authToken,
                            userDetails: tokenDetails.userDetails
                        }
                        resolve(responseBody)
                    }
                })
            } else {
                retrievedTokenDetails.authToken = tokenDetails.token
                retrievedTokenDetails.tokenSecret = tokenDetails.tokenSecret
                retrievedTokenDetails.tokenGenerationTime = time.now()
                retrievedTokenDetails.save((err, newTokenDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'userController: saveToken', 10)
                        let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                        reject(apiResponse)
                    } else {
                        let responseBody = {
                            authToken: newTokenDetails.authToken,
                            userDetails: tokenDetails.userDetails
                        }
                        resolve(responseBody)
                    }
                })
            }
        })
    })
}

module.exports = {

    signUpFunction: signUpFunction,
    loginFunction: loginFunction,
    logout: logout,
    createInvitedUser: createInvitedUser,
    listFriends: listFriends,
    userDetails: userDetails,
    userDetailsByObjectId: userDetailsByObjectId,
    logout: logout,
    forgetPasswordFunction: forgetPasswordFunction,
    checkEmail: checkEmail,
    updatePassword:updatePassword

}