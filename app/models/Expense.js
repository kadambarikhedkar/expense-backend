'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let expenseSchema = new Schema({
  expenseId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  expenseName: {
    type: String,
    default: ''
  },
  group: {
    type:Schema.Types.ObjectId,
    ref: "Group"
  },
  amount: {
    type: Number,
    default:0
  },
  users: [{
    type:Schema.Types.ObjectId,
    ref: "User"
  }],
  paidBy :{
    type:Schema.Types.ObjectId,
    ref: "User"
  },
  active :{
    type:Boolean,
    default:true
  }
  
})


mongoose.model('Expense', expenseSchema);