import mongoose from 'mongoose';
import connection from '../config/DB';

const mensajes = new mongoose.Schema(
	{
		tipo: {
			type: String,
			required: true,
			enum: [
				'Bienvenida',
				'Verificación',
				'Notificación',
				'Recordatorio',
				'Recuperación',
				'Actualización',
				'Confirmación',
			],
		},
		estado: {
			type: String,
			required: true,
			enum: ['Inicial', 'Confirmado', 'Vencido'],
		},
		asunto: String,
		mensaje: String,
	},
	{
		timestamps: true,
	}
);

const MensajesModel = connection.model('Mensajes', mensajes);

export default MensajesModel;
