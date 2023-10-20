import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
 name: {
    type: String,
    trim: true,
    required: 'Name is required'
 },
 description: {
    type: String,
    trim: true,
 },
 price: {
    type: Number,
    trim: true,
    required: 'price is required',
 },
 quantity: {
    type: Number,
    default: 0,
    trim: true
},
category: {
    type: String,
    trim: true
},

 salt: String
});
export default mongoose.model('Product', ProductSchema);

