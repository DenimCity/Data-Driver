  
import { configure, getLogger } from 'log4js';

configure({
	appenders: {
		dashboard: {
			type: 'console'
		}
	},
	categories: {
		default: {
			appenders: [ 'dashboard' ],
			level: process.env.LOG_LEVEL || 'trace'
		}
	}
});

export const logger = getLogger('RGR Stack');
