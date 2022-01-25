const express = require('express');
const app = express();
const morgan = require('morgan');
const validar = require('./src/middlewares/auth');
const validarAdmin = require('./src/middlewares/authAdmin');

const dotenv = require('dotenv');
dotenv.config();


//importacion de rutas 
const indexRouter = require('./src/routes/index')
const registroRouter = require('./src/routes/registro')
const carritoRouter = require('./src/routes/carrito')
const categoriasRouter = require('./src/routes/categorias')
const mensajeRouter = require('./src/routes/mensaje')
const nosotrosRouter = require('./src/routes/nosotros')
const loginRouter = require('./src/routes/login')
const productosRouter = require('./src/routes/productos')
const logoutRouter = require('./src/routes/logout')

//importacion de rutas admin
const adminUsuariosRouter = require('./src/routes/admin/usuarios')
const adminEmpleadosRouter = require('./src/routes/admin/empleados')
const adminCategoriasRouter = require('./src/routes/admin/categorias')
const adminContactoRouter = require('./src/routes/admin/mensajes')
const adminProductosRouter = require('./src/routes/admin/productos')


// Configuraciones
const port = process.env.PORT_SERVER;

const conexionDB = require('./src/utils/bdd');
conexionDB();

app.use(morgan('dev'));
app.use(express.json({  extended: true }))

// Rutas 
app.use('/api/', indexRouter)
app.use('/api/registro', registroRouter)
app.use('/api/carrito',validar , carritoRouter)
app.use('/api/categorias',validar , categoriasRouter)
app.use('/api/contacto', mensajeRouter)
app.use('/api/nosotros',validar , nosotrosRouter)
app.use('/api/login', loginRouter)
app.use('/api/productos',validar ,productosRouter)
app.use('/api/logout',validar , logoutRouter)
// Rutas admin
app.use('/api/admin/',validarAdmin , indexRouter)
app.use('/api/admin/usuarios',validarAdmin , adminUsuariosRouter)
app.use('/api/admin/carrito',validarAdmin , carritoRouter)
app.use('/api/admin/categorias',validarAdmin , adminCategoriasRouter)
app.use('/api/admin/contacto', adminContactoRouter)
app.use('/api/admin/nosotros',validarAdmin , nosotrosRouter)
app.use('/api/admin/login',validarAdmin , loginRouter)
app.use('/api/admin/empleados',validarAdmin , adminEmpleadosRouter)
app.use('/api/admin/productos',validarAdmin ,adminProductosRouter)
app.use('/api/admin/logout',validarAdmin , logoutRouter)


//Levantar el servidor local
app.listen(port, () => {
    console.log(`Server levantado en el puerto ${port}`)
})

module.exports= app;