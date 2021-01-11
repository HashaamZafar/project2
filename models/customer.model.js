const mongoose = require('mongoose');


var CustomerSchema = new mangoose.Schema({

    FullName:{
        type: String
    },
    Gender:{
        type: String
    }

});

mangoose.model('Customer', CustomerSchema);
