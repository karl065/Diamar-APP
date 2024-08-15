import Usuarios from "../models/Usuarios"
import { bcryptjs } from 'bcryptjs';
import jwt from "jsonwebtoken"
import { SECRETA } from process.env

const autenticarUsuario = async(email, password) => {
    try {
        const usuario = await Usuarios.findOne({
            email:{$regex: new RegExp("^" + email + "$", "i")}
        })

        if (!usuario) {
            throw new Error('Email o contraseña incorrectos')
        }

        if (!usuario.habilitado) {
            throw new Error(`El usuario ${email} esta inhabilitado, por favor contacte al administrador`)
        }
            
        const validarContraseña = await bcryptjs.compare(password, usuario.password)

        if (!validarContraseña) {
      throw new Error('Email o Contraseña incorrectos');
    }

        const usuarioLogueado = await Usuarios.findByIdAndUpdate(usuario._id, {estado: true}, {new:true})

        const payload = {
            user: {
                id: usuario._id,
            }
        }

        return new Promise((resolve, reject) => [
            jwt.sign(
                payload,
                SECRETA,
                {
                    expiresIn: '15d',
                },
                (err, token) => {
                    if (err) reject({ msg: "Error al crear el token" })
                    
                    const auth = {
                        token,
                        _id: usuario._id,
                        primerNombre: usuario.primerNombre,
                        segundoNombre: usuario.segundoNombre,
                        primerApellido: usuario.primerApellido,
                        segundoApellido: usuario.segundoApellido,
                        email: usuario.email,
                        documento: usuario.documento,
                        sexo: usuario.sexo,
                        edad: usuario.edad,
                        celular: usuario.celular,
                        foto: usuario.foto,
                        rol: usuario.rol,
                        estado: usuarioLogueado.estado
                    }
                    resolve(auth)
                }
            )
        ])



    } catch (error) {
       throw error.message;
    }
}

export default autenticarUsuario