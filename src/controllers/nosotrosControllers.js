const Nosotros = require('./../model/empleados');

const getNosotros = async (req, res) => {
    try {
    const nosotros = await Nosotros.find({mostrar:{$eq:true}});
    console.log(nosotros);
    res.json({
        nosotros,
    })
    }catch (err) {
        console.log(err)
        res.status(500)
    }
}

module.exports = { getNosotros }