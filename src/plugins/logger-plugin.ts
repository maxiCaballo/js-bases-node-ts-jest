import winston, { format } from 'winston';

const { combine, timestamp, json } = format;

export const logger = winston.createLogger({
	level: 'info',
	format: combine(timestamp(), json()),
	// defaultMeta: { service: 'user-service' },
	transports: [
		//
		// - Write all logs with importance level of `error` or less to `error.log`
		// - Write all logs with importance level of `info` or less to `combined.log`
		//
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.File({ filename: 'combined.log' }),
	],
});

logger.add(
	new winston.transports.Console({
		format: winston.format.simple(),
	}),
);

//*Exporto una funcion que retorna un objeto el cual implementa el logger yo el dia de mañana puedo usar
//*otro logger y mi aplicacion no se veria afectada porque solo tengo que cambiar de logger aca
export function buildLogger(service: string) {
	return {
		log: (message: string) => {
			logger.log('info', { message, service });
		},
		error: (message: string) => {
			logger.error('error', { message, service });
		},
	};
}
