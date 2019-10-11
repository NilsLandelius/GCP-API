const express = require('express');
const router = express.Router();

router.get('/getCustomers', async (req,res)=>{
    res.send({'User':[{'id':'1','name':'Nils'}]});
});

router.get('/getCustomer',async (req,res)=>{
    id = req.query.id;
    res.send({'message':'sending customer with id '+id});
});

module.exports = router;