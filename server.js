import 'dotenv/config';

import express from 'express';
import startDBConnection from './server/database';

const app = express();
const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
	res.send('Hlleo express');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	startDBConnection();
});
