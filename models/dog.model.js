//schema

const mongoose = require('mongoose');
var dogSchema = new mongoose.Schema({
    
    Name:{
        type:String,
        required: 'This field is required'
    },
    life_expectancy:{
    type:String,
    required: 'This field is required'
    },
    max_height: {
    type:String,
    required: 'This field is required'
},
  
max_weight: {
    type:String,
    required: 'This field is required'
},
good_with_children: {
type:String,
required: 'This field is required'
},
playfulness: {
type:String,
required: 'This field is required'
},
protectiveness:{
    type:String,
    required: 'This field is required'
},
trainability: {
    type:String,
    required: 'This field is required'
},
energy:{
type:String,
required: 'This field is required'
},
barking:{
type:String,
required: 'This field is required'
},

},{
    versionKey: false//This is to avoid the _v being created for every record.
});

mongoose.model('dog', dogSchema);

