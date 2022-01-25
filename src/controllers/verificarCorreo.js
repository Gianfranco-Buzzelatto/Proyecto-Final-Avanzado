const Usuario = require("./../model/usuarios");

const verificarCorreo = async (req, res) => {
  const { uid } = req.params;
  console.log(uid);
  try {
    const usuario = await Usuario.findOne({ uuid: uid });
    console.log(usuario);
    if(!usuario) {
      return res.status(404).res.json("el usuario no se ha encontrado")
    }
      const confirmacion = await Usuario.findByIdAndUpdate(usuario.id,{confirmacionCorreo: true,
      habilitado: true})
      console.log(confirmacion)
      res.status(200), res.json("Usuario ha confirmado su cuenta con exito");
  } catch (err) {
    console.log(err);
    res.status(406).json("Error al confirmar usuario");
  }
};
module.exports= {verificarCorreo};
