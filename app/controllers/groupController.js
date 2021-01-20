const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib')

const GroupModel = mongoose.model('Group')
  
    let groupControllerFunction = (req,res) => {
        return new Promise((resolve, reject) => { 

                            let newGroup = new GroupModel({
                            groupId: shortid.generate(),
                            groupName: req.body.groupName,                           
                            createdOn: time.now(),
                            createdBy:req.body.createdBy,
                            users:req.body.users
                        })
                        newGroup.save((err, newGroup) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'groupController: createGroup', 10)
                                let apiResponse = response.generate(true, 'Failed to create new Group', 500, null)
                                reject(apiResponse)
                            } else {
                                let newGroupObj = newGroup.toObject();
                                let apiResponse = response.generate(false, 'Group added successfully', 200, newGroupObj)
                                res.send(apiResponse)
                            }
                        })

                                       });
              
                   
               
    }
    let groupListControllerFunction = (req,res) => {
       GroupModel.find({
        'users': { $in: [
            mongoose.Types.ObjectId(req.query.userId)
        ]}
    }, function(err, result){ 

        if (err) {
            console.log(err)
            logger.error(err.message, 'Group Controller: getAllGroups', 10)
            let apiResponse = response.generate(true, 'Failed To Find Group Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Group Found', 'Group Controller: getAllGroups')
            let apiResponse = response.generate(true, 'No Group Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Group Details Found', 200, result)
            res.send(apiResponse)
        }
        
        });
    
}
    
    let getGroupDetail = (req,res) => {
        let findQuery = {}
        findQuery['_id'] = req.query.groupId;
       
        GroupModel.find(findQuery)
        .select('-__v')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Group Controller: get Group', 10)
                let apiResponse = response.generate(true, 'Failed To Find Group Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Group Found', 'Group Controller: get Group')
                let apiResponse = response.generate(true, 'No Group Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Get Group Details Found', 200, result)
                res.send(apiResponse)
            }
        })
    }


module.exports = {

    groupControllerFunction: groupControllerFunction,
    groupListControllerFunction:groupListControllerFunction,
    getGroupDetail:getGroupDetail
}