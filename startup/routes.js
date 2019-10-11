const customers = require('../routes/customers');


module.exports = function(app){
    app.use('/gcp',customers);
};