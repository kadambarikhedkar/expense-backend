'use strict'

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let groupSchema = new Schema({
  groupId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  groupName: {
    type: String,
    default: ''
  },
  
  createdOn :{
    type:Date,
    default:""
  },
  createdBy :{
    type:String,
    default:""
  },
  users:[
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  active :{
    type:Boolean,
    default:true
  }
 

})


mongoose.model('Group', groupSchema);