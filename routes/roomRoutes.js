const express = require('express');
const {getAllRooms, addRoom, updateRoom, deleteRoom} = require('../controllers/roomController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();
router.get('/rooms', authenticateToken, getAllRooms);
router.post('/rooms', addRoom);
router.put('/rooms/:id', updateRoom);
router.delete('/rooms/:id', deleteRoom);

module.exports = router;