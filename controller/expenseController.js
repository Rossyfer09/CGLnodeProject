const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const expense = mongoose.model('expense');
const expense = mongoose.model('expense');

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

router.get('/allexpenses', async (req, res) => {
    const allexpenses = await expense.find()
    res.send(allexpenses)
});

//found record by id no using callback
router.get('/:id', async (req, res) => {
    try{
    const id = req.params.id;
    const expenseId = await expense.findById(id);
    if(!expense){
        return res.status(400).send({message:'expense not found'});
    }
    res.status(200).send(expenseId);
    
   } catch (err) {
    console.error('Error retrivieving expense:', err);
    res.status(500).send({message:'Error retrieving expense'});
     }
    });
//___________________________________________________
router.post('/', (req, res) =>{
    if (!req,body._id || req.body._id == ''){
        console.log('insert');
        insertRecord(req, res);
    } else {
        console.log('update')
        updateRecord(req, res);
    }
    
});
   
async function insertRecord(req, res){
    try{
    var expenseObj = new expense();
    expenseObj.expense = req.body.expense;
    expenseObj.amount = req.body.amount;
    expenseObj.date = req.body.date;
    expenseObj.notes = req.body.notes;
    //remmoving callback function
    // expenseObj.save ((err, doc)=> {
    //     if(!err){
    //         res.redirect('expense/list');
    //     }
    //     else {
    //         console.log('Error during insert:' + err)
    //     }
    // })
    const doc = await expenseObj.save();
        res.redirect('expense/list');
    } catch(err) {
        console.log('Error during insert:' + err);
    }

}

async function updateRecord(req, res){
    try {

    const updateRecord = await expense.findOneAndUpdate(
        {_id: req.body._id},
        req.body);
        res.redirect('expense/list');
        } catch (err){
                console.log('error during update:' + err);
            }
        }


// function getRecord(req, res){
    
// }
router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const expeseIdD = await expense.findByIdAndRemove(id);
        if(!expense){
            return res.status(400).send({message:'expense not found'});
        }
        res.status(200).send(expenseIdD);
        
       } catch (err) {
        console.error('Error deleting expense:', err);
        res.status(500).send({message:'Error retrieving expense'});
         }
        });
// function deleteRecord(req, res){
    
// }



module.exports = router;