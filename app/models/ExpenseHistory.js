'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let expenseHistorySchema = new Schema({
  expenseHistoryId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  expenseId: {
    type:Schema.Types.ObjectId,
    ref: "Expense"
  },
  action: {
    type:String,
    default: ""
  },
  doneBy :{
    type:String,
    default:""
  },
  time :{
    type:Date,
    default:""
  }

})


mongoose.model('ExpenseHistory', expenseHistorySchema);