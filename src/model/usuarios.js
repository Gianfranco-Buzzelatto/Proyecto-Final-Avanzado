const mongoose = require('mongoose');

const usuariosSchemas = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trin: true
    },
    apellido: {
        type: String,
        required: true,
        trin: true
    },
    eliminado: {
        type: Boolean,
        required: true,
        default: false
    },
    usuario: {
        type: String,
        required: true,
        unique: true,
    },
    registro: {
        type: Date,
        default: Date.now()
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    compras: {
        type: String,
    },
    habilitado:{
        type: Boolean,
        required: true,
        default: false
    },
    uuid: {
        type: String,
    },
    confirmacionCorreo:{
        type: Boolean,
        default: false,
    },
    imagen:{
        type: String,
    }
}, {versionKey: false})



module.exports = mongoose.model('usuarios', usuariosSchemas);
