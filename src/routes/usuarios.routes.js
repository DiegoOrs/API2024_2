import { Router } from "express";
import { getUsuarios, getUsuariosxId, postUsuario, putUsuario } from "../controladores/usuariosCtrl.js";

const router=Router()

router.get('/usuarios',getUsuarios)  //select
router.get('/usuarios/:id',getUsuariosxId)  //select x id
router.post('/usuarios',postUsuario)  //insert
router.put('/usuarios/:id',putUsuario)  //update
//router.patch('')  //update
//router.delete('')  //delete
export default router