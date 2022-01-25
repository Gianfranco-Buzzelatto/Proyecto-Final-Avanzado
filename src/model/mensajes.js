const mongoose = require('mongoose');
const mensajesSchemas = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    eliminado:{
        type: Boolean,
        required: true,
        default: false
    },
    fecha:{
        type: Date,
        default: Date.now(),
        trim: true
    },
    mensaje: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    mail:{
        type: String,
        required: true,
        unique: false
    },
    visto:{
        type: Boolean,
        default: false
    }
},
{versionKey:false});

module.exports = mongoose.model('Mensajes', mensajesSchemas);