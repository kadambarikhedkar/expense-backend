'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: '$2b$10$/pnv2q0KX8ynUnnLze0wsukYHvhKodu.VEtyrEJ2muxWAcrwvBjn2'
  },
  email: {
    type: String,
    default: ''
  },
  countryCode: {
    type: String,
    default: ''
  },
  mobileNumber: {
    type: Number,
    default: 0
  },
  createdOn :{
    type:Date,
    default:""
  },
  createdBy :{
    type:String,
    default:""
  },
  active :{
    type:Boolean,
    default:true
  }
  

})


mongoose.model('User', userSchema);