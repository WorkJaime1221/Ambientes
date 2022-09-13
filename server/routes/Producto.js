const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/', productoController.crearProducto); //Agregar o crear
router.get('/', productoController.obtenerProductos); //Mostrar
router.put('/:id', productoController.actualizarProducto); // Actualizar
router.get('/:id', productoController.obtenerProducto); // obtener 
router.delete('/:id', productoController.eliminarProducto); //eliminar

module.exports = router;