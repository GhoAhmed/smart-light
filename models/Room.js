const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema ({
    roomNumber : Number,
    roomName : String,
    isOn : Boolean 
});

module.exports = mongoose.model('Room', roomSchema);
