const Empleados = require('./../model/empleados');
const bcrypt = require('bcrypt')
const multer = require('multer');
const config = {dest: './src/public/images'};


const getEmpleados = async(req, res) => {
    try {
    const empleados = await Empleados.find();
    res.status(200).send({empleados});
    }catch(err) {
        console.log(err);
        res.status(500).send({err})
    }};

const getEmpleado = async (req, res) => {
    let id = req.params.id;
    try {
        const empleado = await Empleados.findById(id);
        res.status(200).send({empleado});
    }catch(err) {
        console.log(err);
        res.status(500).send({err})
    }
};
const createEmpleado = async(req, res) => {
    try {
        const empleado = new Empleados(req.body);
        empleado.password = await bcrypt.hash(empleado.password, 10);
        empleado.image = await 
        empleado.save();
        res.status(200).send({empleado});
        res.json({
            result: true,
            message: 'Empleado creado con exito'
        })
    }catch(err) {
        console.log(err);
        res.status(500).send({err})
        res.json({
            result: false,
            message: 'Empleado no pudo ser registrado'
        })
    }
}

const updateEmpleado = async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        const empleado = await Empleados.findByIdAndUpdate(id, body)
        empleado.password = await bcrypt.hash(empleado.password, 10);
        console.log(empleado.password)
        console.log(empleado)
        await empleado.save();
        res.json({
            results: true,
            message: "Empleado actualizado con exito"
        })
    }catch(err){
        res.json({
            results: false,
            message: "no se pudo actualizar el Empleado"
        });
        console.log(err)
        res.status(500).send({err})
    }
}

const updateEmpleadoImage = async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        const empleado = await Empleados.findByIdAndUpdate(id, body)
        empleado.password = await bcrypt.hash(empleado.password, 10);
        console.log(empleado.password)
        console.log(empleado)
        await empleado.save();
        res.json({
            results: true,
            message: "Empleado actualizado con exito"
        })
    }catch(err){
        res.json({
            results: false,
            message: "no se pudo actualizar el Empleado"
        });
        console.log(err)
        res.status(500).send({err})
    }
}


const admin = async(req, res) => {
    let id = req.params.id;
    try {
        const empleadoAdmin = await Empleados.findById(id);
        empleadoAdmin.administrador = !empleadoAdmin.administrador;
        empleadoAdmin.save();
        res.json({
            result: true,
            message: `Empleado ahora es un administrador`
        })
    }catch(err) {
        console.log(err);
        res.status(500).send({err});
        res.json({
            result: false,
            message: 'Empleado no puede ser administrador'
        })
    }
};

const mostrar = async(req, res) => {
    let id = req.params.id;
    try {
        const empleadoMostrar = await Empleados.findById(id);
        empleadoMostrar.mostrar = !empleadoMostrar.mostrar;
        empleadoMostrar.save();
        res.json({
            result: true,
            message: `Empleado ahora se podra observar en nosotros`
        })
    }catch(err) {
        console.log(err);
        res.status(500).send({err});
        res.json({
            result: false,
            message: 'Empleado no puede ser mostrado'
        })
    }
};

const deleteEmpleado = async (req, res) => {
    let id = req.params.id;
    try {
        const empleado = await Empleados.findById(id);
        empleado.eliminado = !empleado.eliminado;
        empleado.save();
        res.json({
            result: true,
            message: 'Empleado eliminado con exito'
        })
    }catch(err) {
        console.log(err)
        res.status(500).send({err});
        res.json({
            result: false,
            message: 'Empleado no pudo ser eliminado'
        })
    }
} 
module.exports ={
    getEmpleados,
    getEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
    admin,
    mostrar,
    updateEmpleadoImage
}