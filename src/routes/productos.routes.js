import { Router } from 'express';
import {  registrarProducto, obtenerProductos, obtenerProducto } from '../controllers/productos.controller.js';

const router = Router();

// Ruta para obtener un produto por su ID
router.post('/registrarproducto', registrarProducto);

// Ruta para obtener todos los productos
router.get('/productos', obtenerProductos);

// Ruta para obtener un produto por su ID
router.get('/producto/:id', obtenerProducto);

export default router;