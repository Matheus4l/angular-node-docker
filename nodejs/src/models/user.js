const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome:{
        type:String,
        require:true,

    },
    valor:{
        type:Number,
        require:true
    },
    desde:{
        type:Date,
        default: Date.now,
    }

});

module.exports = mongoose.model('User',UserSchema)