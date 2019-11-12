import mongoose from 'mongoose';

export default async function startDBConnection() {
	console.log('Attempting to Connect to MongoDB..........');
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('Connected to MongoDB..........');
	} catch (error) {
		console.log('Error Connecting to MongoDB..........' + error);
	}
}
