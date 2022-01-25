const mongoose = require('mongoose');

const categoriaSchemas = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trin: true
    },
    eliminado: {
        type: Boolean,
        required: true,
        default: false
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    productos:{
        type: String,
    }
}, {versionKey: false})
module.exports = mongoose.model('categoria', categoriaSchemas)