import mongoose from 'mongoose';
import { logger } from '../utils';

export default async function startDBConnection() {
	logger.debug('Attempting to Connect to MongoDB');
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		logger.debug('Connected to MongoDB');
		return true;
	} catch (error) {
		logger.error('Error Connecting to MongoDB' + error);
		throw new Error(error);
	}
}
