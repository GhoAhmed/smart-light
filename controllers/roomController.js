const Room = require('../models/Room');

exports.getAllRooms = async (req, res) => {
    try{
        const rooms = await Room.find();
        res.json(rooms);
    }catch(error){
        res.status(500).json({error: 'Server Error!'});
    }
};

exports.addRoom = async (req, res) => {
    try {
        const {roomNumber, roomName, isOn} = req.body;
        const room = new Room({roomNumber, roomName, isOn});
        await room.save();
        res.status(201).json(room);
    }catch(error){
        res.status(500).json({error: "Server error."});
    }
};

exports.updateRoom = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    try {
        const room = await Room.findByIdAndUpdate(id, updates, {new : true});
        if(!room) return res.status(404).send('Not found.');
        res.json(room);
    }catch(error){
        res.status(500).json({error: "Server error."});
    }
};

exports.deleteRoom = async (req, res) => {
    const id = req.params.id;
    try {
        const room = await Room.findByIdAndDelete(id);
        if(!room) return res.status(404).send('Not found.');
        res.send(`Room deleted successfully ${room.roomName}`);
    }catch(error){
        res.status(500).json({error: "Server error."});
    }
};

