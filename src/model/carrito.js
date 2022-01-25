const mongoose = require('mongoose');

const carritoSchemas = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        trin: true
    },
    realizado: {
        type: Boolean,
        required: true
    },
    eliminado: {
        type: Boolean,
        required: true,
        default: false
    },
    cantidadDeProduto: {
        type: Number,
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now(),
    },
    precioFinal: {
        type: Number,
        required: true,
        trim: true,
    },
    descrpcion: {
        type: String,
        required: true,
        trim: true
    },
}, {versionKey: false})
module.exports = mongoose.model('carrito', carritoSchemas)