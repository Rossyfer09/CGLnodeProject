//schema

const mongoose = require('mongoose');
var dogSchema = new mongoose.Schema({
    
    Name:{
        type:String,
        required: 'This field is required'
    },
    min_life_expectancy: {
        type:String,
        required: 'This field is required'
    },

    max_life_expectancy:{
    type:String,
    required: 'This field is required'
    },
    max_height_male: {
    type:String,
    required: 'This field is required'
},
   max_height_female:{
    type:String,
    required: 'This field is required'
},
max_weight_male: {
    type:String,
    required: 'This field is required'
},

max_weight_female:{
type:String,
required: 'This field is required'
},
min_height_male: {
type:String,
required: 'This field is required'
},
min_height_female:{
    type:String,
    required: 'This field is required'
},
min_weight_male: {
    type:String,
    required: 'This field is required'
},

min_weight_female:{
type:String,
required: 'This field is required'
},
good_with_children: {
type:String,
required: 'This field is required'
},
good_with_other_dogs:{
    type:String,
    required: 'This field is required'
},
shedding: {
    type:String,
    required: 'This field is required'
},

grooming:{
type:String,
required: 'This field is required'
},
drooling: {
    type:String,
    required: 'This field is required'
    },

coat_length: {
    type:String,
    required: 'This field is required'
},

good_with_strangers:{
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

