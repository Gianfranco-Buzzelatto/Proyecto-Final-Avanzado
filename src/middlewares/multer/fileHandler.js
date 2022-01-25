// aca se configura el programa para guardar solamente las imagenes y archivos de un formato especifico.
// en caso de no cumplirlo no se puede guardar

const fs = require('fs');
const {v4 : uuid} = require('uuid');
const allowExtensions = ["png", "jpg", "jpge", "pdf"];

const saveFile = ({mimetype, path}, allowE, destFolder = `./src/public/images`) => {
    try {
        const [type, extension] = mimetype.split("/");
        if(!allowE.includes(extension))throw "El formato que quiere ingresar es invalido";
        const uid = uuid();
        const fileName = `${uid}.${extension}`;
        const fileNameOut = `${destFolder}/${fileName}`;
        fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
        fs.unlink(path, (error)=> console.log(error));
        return fileName;
    }catch(e){
        fs.unlink(path, (error) => console.log(error));
        console.log(e);
    }
}
const files = (file) => saveFile(file, allowExtensions);

module.exports = {files};