const mongoose = require('mongoose')

const imagenesUsuarios = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trin: true
    },
    uid: {
        type: String,
        required: true,
        trin: true
    },
    idUsuario:{
        type: Number,
        required: true,
        trim: true
    },
    eliminado: {
        type: Boolean,
        required: true,
        default: false
    }
}, {versionKey: false})
module.exports = mongoose.model('imagenesUsuariosDB', imagenesUsuariosSchemas)