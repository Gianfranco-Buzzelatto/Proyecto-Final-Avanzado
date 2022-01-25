const fs = require('fs');
const publicKeyAdmin = fs.readFileSync('./src/utils/keys/keysAdmin/publicAdmin.pem');
const jsonwebtoken = require('jsonwebtoken');

const validarAdmin = async (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1];
    console.log(token)
    if (!token) {
        return res.status(403).send({message: 'No hay token, no puede ingresar aqui'});
    }
    try {
        const { id } = jsonwebtoken.verify( token, publicKeyAdmin );
        req.id = id;
        next();
    }catch (error) {
        res.json({
            message: "El token no es valido, no puede ingresar aqui",
        })
        console.log(error);
        res.status(401)
        res.end();
    }
}

module.exports = validarAdmin;