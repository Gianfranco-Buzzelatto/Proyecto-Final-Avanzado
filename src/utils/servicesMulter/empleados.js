const {imagenesEmpleadosDB} = require('./../../model/imagenesEmpleadosDB');
const model = require ('././../../model/empleados');
const { files } = require ('./../../middlewares/multer/fileHandler');


const _id = id_empleados;
const createEmpleado = async (body, file) => {
   try{
       const {insertId : id_empleados} = await model.createEmpleado(body); 
       const uid = files(file);
       const obj = {id_empleados, uid};
       const {insertId : idImg} = await imagenesEmpleadosDB(obj);
       return idImg;
       } catch (error){
       console.error(error);
   }
}
const updateEmpleado = async (id, body, file) => {
   try{
       const  id_empleados = await model.updateEmpleado(id, body); 
       if(file){
           const uid = files(file);
           const obj = {uid};
           const idImg = await model.updateImage(_id, obj);
           return idImg;
       }
       else{
           return id_empleados
       }
       } catch (error){
       console.error(error);
   }
}

module.exports = {createEmpleado, updateEmpleado};