require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const roomRoutes = require('./routes/roomRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
connectDB();

// MiDDLEWARE TO ANALYZE JSON
app.use(express.json());

// Routes
app.use('/api', roomRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
