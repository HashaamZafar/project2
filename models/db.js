const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CustomersDb', {useNewUrlParser: true},(err) => {
    if(!err){console.log('MongoDb Connnection Succeded')}
    else { console.log('Error in Db Connection : ' + err )}
});

require('./customer.model');