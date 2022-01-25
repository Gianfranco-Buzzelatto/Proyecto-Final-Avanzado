const fs = require('fs');
const publicKey = fs.readFileSync('./src/utils/keys/public.pem');
const jsonwebtoken = require('jsonwebtoken');

const validar = async (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1]
    console.log(token)
    if (!token) {
        return res.status(403).send({message: 'No hay token'});
    }
    try {
        const { id } = jsonwebtoken.verify( token, publicKey );
        req.id = id;
        next();
    }catch (error) {
        console.log(error);
        res.status(401)
    }
}

module.exports = validar;