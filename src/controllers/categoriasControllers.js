const Categorias = require('./../model/categorias');

const getCategorias = async (req, res) => {
    try {
    const categorias = await Categorias.find();
    res.status(200).send({categorias})
    }catch (err) {
        console.log(err)
        res.status(500).send({error})
}};

const getCategoria = async(req, res) => {
    let id = req.params.id;
    try {
        const categoria = await Categorias.findById(id);
        res.status(200).send({categoria})
    }catch(err){
        console.log(err)
        res.status(500).send({error})
    }
};
const createCategoria = async (req, res) => {
    try{
        const categoria = new Categorias(req.body);
        await categoria.save();
        res.status(200).send({categoria});
        res.json({
            result: true,
            message: 'Categoria creado con exito'
        })
    }catch(err){
        console.log(err)
        res.status(500).send({error})
        res.json({
            result: false,
            message: 'Categoria no pudo ser registrado'
        })
    }
};

const updateCategoria = async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        const categoria = await Categorias.findByIdAndUpdate(id, body);
        console.log(categoria)
        res.json({
            results: true,
            message: "Categoria actualizada con exito"
        })
    }catch(err){
        res.json({
            results: false,
            message: "no se pudo actualizar la categoria"
        });
        console.log(err)
        res.status(500).send({error})
    }
}


const deleteCategoria = async (req, res) => {
    let id = req.params.id
    try{
        const categoria = await Categorias.findById(id);
        categoria.eliminado = !categoria.eliminado;
        categoria.save(); 
        res.json({
            results: true,
            message: "Categoria eliminada con exito"
        })
    }catch(err){
        console.log(err);
        res.json({
            results: false,
            message: "no se pudo eliminar la categoria"
        });
    }
}
module.exports = {
    getCategorias,
    getCategoria,
    createCategoria,
    updateCategoria,
    deleteCategoria
}
