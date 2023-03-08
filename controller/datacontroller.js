const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const dog = mongoose.model('dog');

//this paragrapha is giving error (MongooseError: Model.find() no longer accepts a callback)
// router.get('/list', (req, res) => {
//  expense.find((err, data) => {
//     if(!err){
//         res.send(data);

//     } else {
//         console.log('Error in retrieval:' + err);

//     }
//  })
// });

// remplace with a suggestion find on stackoverflow page

router.get('/alldogs', async (req, res) => {
    const alldogs = await dog.find()
    res.send(alldogs)
});

//found record by id no using callback
router.get('/:id', async (req, res) => {
    try{
    const id = req.params.id;
    const dogId = await dog.findById(id);
    if(!dog){
        return res.status(400).send({message:'breed not found'});
    }
    res.status(200).send(dogId);
    
   } catch (err) {
    console.error('Error retrivieving dog:', err);
    res.status(500).send({message:'Error retrieving dog'});
     }
    });
//___________________________________________________
router.post('/', (req, res) =>{
    if (!req.body._id || req.body._id == ''){
        console.log('insert');
        insertRecord(req, res);
    } else {
        console.log('update')
        updateRecord(req, res);
    }
    
});


   
async function insertRecord(req, res){
    try{
    var dogObj = new dog();
dogObj.Name = req.body.Name;
dogObj.life_expectancy = req.body.life_expectancy;
dogObj.max_height = req.body.max_height;
dogObj.max_weight = req.body.max_weight;
dogObj.trainability = req.body.trainability;
dogObj.energy = req.body.energy;
dogObj.barking = req.body.barking;
    //remmoving callback function
    // expenseObj.save ((err, doc)=> {
    //     if(!err){
    //         res.redirect('expense/list');
    //     }
    //     else {
    //         console.log('Error during insert:' + err)
    //     }
    // })
    const doc = await dogObj.save();
        res.redirect('dog/list');
    } catch(err) {
        console.log('Error during insert:' + err);
    }

}

router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedDog = req.body; // assuming the updated dog data is sent in the request body

        // Find the dog record by id and update it
        const result = await dog.findByIdAndUpdate(id, updatedDog, { new: true });

        if (!result) {
            return res.status(404).send({ message: 'Dog not found' });
        }

        res.status(200).send(result);
    } catch (err) {
        console.error('Error updating dog:', err);
        res.status(500).send({ message: 'Error updating dog' });
    }
});

// async function updateRecord(req, res){
//     try {

//     const updateRecord = await dog.findOneAndUpdate(
//         {_id: req.body._id},
//         req.body);
//         res.redirect('dog/list');
//         } catch (err){
//                 console.log('error during update:' + err);
//             }
//         }

// function updateRecord(req, res) {
//     dog.findOneAndUpdate(
//         {_id: req.body._id},
//         req.body,
//         (err, doc) => {
//             if (!err) {
//                 res.redirect('dog/list');
//             } else {
//                 console.log('Error during update:' + err);
//             }
//         }
//     )
// }
// function getRecord(req, res){
    
// }
router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const dogIdD = await dog.findByIdAndRemove(id);
        if(!dog){
            return res.status(400).send({message:'dog not found'});
        }
        res.status(200).send(dogIdD);
        
       } catch (err) {
        console.error('Error deleting dog:', err);
        res.status(500).send({message:'Error retrieving dog'});
         }
        });



module.exports = router;