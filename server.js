import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('Hlleo express');
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
