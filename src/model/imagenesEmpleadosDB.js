const mongoose = require('mongoose')

const imagenesEmpleados = mongoose.Schema({
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
    idEmpleado:{
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
module.exports = mongoose.model('imagenesEmpleadosDB', imagenesEmpleadosSchemas)