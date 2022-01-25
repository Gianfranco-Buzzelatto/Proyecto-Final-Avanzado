const Usuario = require('./../model/usuarios');
const Empleado = require('./../model/empleados');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
// fs sirve para leer y escribir archivos del sistema, en este caso leer
const fs = require('fs');
// // traemos la key generada
const secretKey = fs.readFileSync('./src/utils/keys/secret.pem');
const secretKeyAdmin = fs.readFileSync('./src/utils/keys/keysAdmin/secretAdmin.pem')


const login = async (req, res) => {
    // extraer usuario y password
    const {email, password} = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msj: 'Usuario no encontrado, intente nuevamente' })
        }
        if (usuario.habilitado === !'true'){
            return res.status(400).json({ msj: 'Debe activar su cuenta' })
        }
        const passCorrect = await bcrypt.compare(password, usuario.password);
        if (!passCorrect) {
            return res.status(400).json({ msj: 'contraseña incorrecta' })
        }
        const payload = {
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
            }
        }
        jsonwebtoken.sign(payload, secretKey, {
            expiresIn: '2h',
            algorithm: 'RS256'
        }, (error, token) => {
            if (error) throw error;

            res.json({msj:'Acceso correcto', token });
        })

    } catch (error) {
        console.log(error)
    }
}

const loginAdmin = async (req, res) => {
    // extraer emplaado y password
    const {email, password } = req.body;
    try {
        const empleado = await Empleado.findOne({ email });

        if (!empleado) {
            return res.status(400).json({ msj: 'Empleado no encontrado, intente nuevamente' })
        }
        const passCorrecta = await bcrypt.compare(password, empleado.password);
        if (!passCorrecta) {
            return res.status(400).json({ msj: 'contraseña incorrecta' })
        }
        if(empleado.administrador === !'true') {
            return res.status(400).json({ msj: 'No esta autorizado para ingresar' })
        }
        const payload = {
            empleado: {
                id: empleado.id,
                nombre: empleado.nombre,
                administrador: empleado.administrador
            }
        }
        jsonwebtoken.sign(payload, secretKeyAdmin, {
            expiresIn: '2h',
            algorithm: 'RS256'
        }, (error, token) => {
            if (error) throw error;
            res.json({msj:`Bienvenido ${empleado.nombre}!`, token });
        })

    } catch (error) {
        console.log(error)
        res.json({
            message: 'Ingreso no permitido',
            result: false
        });
    }
}


module.exports = {login, loginAdmin};