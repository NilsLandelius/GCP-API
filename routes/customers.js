const {Datastore} = require('@google-cloud/datastore');
const {getCustomers,keySearch} = require('../models/customer');
const express = require('express');
const router = express.Router();

const datastore = new Datastore();

router.get('/getCustomers', async (req,res)=>{
    const customlist = await getCustomers();
    let returnList = [];
    for (x=0;x<customlist.length;x++){
        var cu = [customlist[x][datastore.KEY].id,customlist[x].name]
        returnList.push(cu);
    };
    res.send(returnList);
});

router.get('/getCustomer',async (req,res)=>{
    id = req.query.id;
    let returnList  = await keySearch(id.toString());
    res.json(returnList[0])
});

module.exports = router;