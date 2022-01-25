const mongoose = require('mongoose');

require('dotenv').config({path:'.env'});

const conexionDB = async () => {
    try {
        await mongoose.connect(process.env.LINK_MONGODB_CONEXION)
        console.log('mongoDB conected')
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}
module.exports = conexionDB; 