import {conmysql} from '../db.js'
export const getClientes=
    async (req,res)=>{
        try {
            const [result] = await conmysql.query(' select * from clientes ')
            res.json(result)
        } catch (error) {
            return res.status(500).json({message:"Error al consultar"})
        }
    }
    


export const getclientesxid=
async (req,res)=>{
    try {
        const[result]=await conmysql.query('select * from clientes where cli_id=?',[req.params.id])
        if (result.length<=0)return res.status(404).json({
            cli_id:0,
            message:"Cliente no encontrado"
        })
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({message:'error del servidor'})        
    }
}
export const postCliente=
async (req,res)=>{
    try {
       
        const {cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad}=req.body
       
        const [rows]=await conmysql.query('insert into clientes (cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad) values(?,?,?,?,?,?,?)',
            [cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad])

        res.send({
            id:rows.insertId
        })
    } catch (error) {
        return res.status(500).json({message:'error del servidor'})
    }
}
export const putCliente=
async (req,res)=>{
    try {
        const {id}=req.params
      
        const {cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad}=req.body
        console.log(cli_nombre)
        const [result]=await conmysql.query('update clientes set cli_identificacion=?, cli_nombre=?, cli_telefono=?, cli_correo=?, cli_direccion=?, cli_pais=?, cli_ciudad=? where cli_id=?',
            [cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad, id])

        if(result.affectedRows<=0)return res.status(404).json({
            message:'Cliente no encontrado'
        })
        const[rows]=await conmysql.query('select * from clientes where cli_id=?',[id])
        res.json(rows[0])
     
    } catch (error) {
        return res.status(500).json({message:'error del servidor'})
    }
}

export const patchCliente=(req,res)=>res.send('modificar x id')

export const deleteCliente=(req,res)=>res.send('eliminar cliente')