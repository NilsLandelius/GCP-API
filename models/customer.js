const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();

async function getCustomers(){
    const query = datastore.createQuery('customer');
    const [entities] = await datastore.runQuery(query);
    return entities;
}; 

async function keySearch(id){
    const query = datastore.createQuery('customer')
    query.filter('__key__',{kind:'customer',id:id})
    var keys = await datastore.runQuery(query);

    console.log(keys);
    return keys;
};



module.exports.getCustomers = getCustomers;
module.exports.keySearch = keySearch;
