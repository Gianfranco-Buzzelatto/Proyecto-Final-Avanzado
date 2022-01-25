const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productosSchemas = mongoose.Schema({
    producto: {
        type: String,
        required: true,
        trin: true
    },
    categorias: {
        type: Schema.Types.ObjectId,
        ref: 'categorias'
    },
    eliminado: {
        type: Boolean,
        required: true,
        default: false
    },
    stock: {
        type: String,
        required: true,
    },
    registro: {
        type: Date,
        default: Date.now(),
    },
    precio: {
        type: Number,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    imagen:{
        type: String,
    }
}, {versionKey: false})
module.exports = mongoose.model('productos', productosSchemas)