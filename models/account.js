var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema ({
    username: String,
    password: String,
    fullName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipCode: Number,
    deliveryDate: {type: Date, default: Date.now },
    accessLevel: Number

});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);