const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ahmedgodhbeni:123456Ag*@cluster0.bhuc2.mongodb.net/',
            {
                useNewUrlParser:true,
                useUnifiedTopology:true
            }
        );
        console.log('MongoDB connected');
    }catch(error){
        console.log('Connection error', error);
        process.exit(1);
    }
};

module.exports = connectDB;
