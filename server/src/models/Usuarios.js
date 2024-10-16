import mongoose from 'mongoose';
import connection from '../config/DB';

const usuariosSchema = new mongoose.Schema({
	primerNombre: String,
	segundoNombre: String,
	primerApellido: String,
	segundoApellido: String,
	documento: Number,
	edad: Number,
	sexo: {
		type: String,
		enum: ['Masculino', 'Femenino'],
	},
	foto: String,
	consentimiento: [String],
	rol: {
		type: String,
		enum: ['Administrador', 'Terapeuta', 'Cliente'],
	},
	habilitado: {
		type: Boolean,
		default: true,
		required: true,
	},
	estado: {
		type: Boolean,
		default: false,
		required: true,
	},
	verificado: {
		type: Boolean,
		default: false,
		required: true,
	},
	email: {
		type: String,
		unique: true,
	},
	celular: Number,
	password: {
		type: String,
		required: true,
	},
	reservas: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Reservas',
		},
	],
	fichaGeneral: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'FichaGeneral',
	},
	fichasMasajes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'FichaMasaje',
		},
	],
	fichasFaciales: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'FichaFacial',
		},
	],
	fichasCorporales: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'FichaCorporal',
		},
	],
	notificaciones: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Notificaciones',
		},
	],
});

const UsuarioModel = connection.model('Usuarios', usuariosSchema);

export default UsuarioModel;
