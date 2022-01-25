const mongoose = require('mongoose');

const empleadosSchemas = mongoose.Schema({
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
    ingreso: {
        type: Date,
        default: Date.now(),
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
    administrador: {
        type: Boolean,
        required: true,
        default: false
    },
    ocupacion:{
        type: String,
        required: true,
    },
    mostrar:{
        type: Boolean,
        required: true,
        default: false
    },
    imagen:{
        type: String,
    }
}, {versionKey: false})
module.exports = mongoose.model('empleados', empleadosSchemas)