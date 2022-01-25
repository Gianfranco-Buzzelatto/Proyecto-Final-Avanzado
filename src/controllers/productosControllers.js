const Productos = require('./../model/productos')
const Categorias = require('./../model/categorias');


const getProductos = async(req, res) =>{
    try{
        const productos = await Productos.find({eliminado : {$eq : false}});
        res.status(200).send({productos})
    }catch (err) {
        console.log(err)
        res.status(500).send({error})
}
};


const getProducto = async(req, res) =>{
    let id = req.params.id;
    try{
        const productos = await Productos.findById(id);
        res.status(200).send({productos})
    }catch (err) {
        console.log(err)
        res.status(500).send({error})
}
};

// const getProductosAdmin = async(req, res) =>{
//     try{
//         const productos = await Productos.find({});
//         res.status(200).send({productos})
//     }catch (err) {
//         console.log(err)
//         res.status(500).send({error})
// }
// };

//test
const getProductosAdmin = async(req, res) =>{
    try{
        const productos = await Productos.find({}).populate("categorias");
        res.status(200).send({productos})
    }catch (err) {
        console.log(err)
        res.status(500).send({error})
}
};



const createProductos = async (req, res) => {
    try {
      const {producto, precio, stock, categorias, descripcion} = req.body;
      console.log(producto, precio, stock, categorias, descripcion);
      const categoria = await Categorias.find(categorias);
      console.log(categoria.id);
  
      const newProduct = new Productos({
        producto: producto,
        precio: precio,
        descripcion: descripcion,
        stock: stock,
        categorias: categoria.id
      });
  
      const saveProduct = await newProduct.save();
      categoria.productos = categoria.productos.concat(newProduct);
      await categoria.save();
      res.json(saveProduct);
    } catch (err) {
      console.log(err);
    }
  }; 



// const createProductos = async (req, res) => {
//     try {
//         const productos = new Productos(req.body);
//         console.log(productos)
//         await productos.save();
//         res.status(200).json(productos);
//         res.json({
//             result: true,
//             message: 'producto creado con exito'
//         })
//       } catch (err) {
//         console.log(err);
//         res.status(500).send({error})
//         res.json({
//             result: false,
//             message: 'producto no pudo ser registrado'
//         })
//       }
//     };



const updateProductos = async (req, res) => {
    let body = req.body;
    let id = req.params.id;
    try {
        const producto = await Productos.findById(id, body);
        console.log(producto)
        res.json({
            resultado: true,
            message: 'Producto modificado con exito'
        }),
        res.status(200)
    }catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            message: 'Producto no pudo ser modificado',
            resultado: false
        })
    }
}

const deleteProductos = async(req, res) =>{
    let id = req.params.id;
    try {
        const producto = await Productos.findById(id);
        producto.eliminado = !producto.eliminado;
        producto.save();
        res.json({
            resultado: true,
            message: 'Producto eliminado con exito'
        })
    }catch(e){
        console.log(e);
        res.json({
            resultado: false,
            msg: 'No se pudo eliminar el producto',
        });
    }
}


module.exports = {
    getProductos, 
    getProducto,
    getProductosAdmin, 
    createProductos, 
    updateProductos, 
    deleteProductos
};







