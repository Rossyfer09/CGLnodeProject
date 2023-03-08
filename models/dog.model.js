//schema

const mongoose = require('mongoose');
const dogSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    life_expectancy: { type: String, required: true },
    max_height: { type: String, required: true },
    max_weight: { type: String, required: true },
    energy: { type: String, required: true },
    barking: { type: String, required: true }
},{
    versionKey: false//This is to avoid the _v being created for every record.
});
mongoose.model('dogs', dogSchema);