import { Router } from "express";
import multer from 'multer'
import {getProductos, getProdcutosxid,postProductos,putProductos,patchProductos,deleteProductos} from '../controladores/productosCtrl.js'


//configurar multer para almacenar las imagenes
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads'); //carpeta donde se guardan las imagenes
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`);
    }
});

const upload=multer({storage});

const router=Router()
//armar nuestras rutas

router.get('/productos',getProductos)  //select
router.get('/productos/:id',getProdcutosxid)  //select x id
router.post('/productos',postProductos)  //insert
router.put('/productos/:id',putProductos)  //update
router.patch('/productos/:id',patchProductos)  //update
router.delete('/productos/:id',deleteProductos)  //delete

export default router