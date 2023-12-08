const express = require('express');
const path = require('path');

const app = express();

//MIDDLEWARE with no 'path' parameter to work for each endpoint
app.use((req, res, next) => {
	res.show = name => {
		res.sendFile(path.join(__dirname, `/views/${name}`));
	};
	next();
});

app.get('/', (req, res) => {
	res.show('index.html');
});

app.get('/about', (req, res) => {
	res.show('about.html');
	// res.sendFile(path.join(__dirname, './views/about.html'));
});

app.get('/contact', (req, res) => {
	res.show('contact.html');
	// res.sendFile(path.join(__dirname, './views/contact.html'));
});

app.get('/info', (req, res) => {
	res.show('info.html');
	// res.sendFile(path.join(__dirname, './views/info.html'));
});

app.get('/history', (req, res) => {
	res.show('history.html');
	// res.sendFile(path.join(__dirname, './views/history.html'));
});

app.listen(8000, () => {
	console.log('Server is running on port: 8000');
});
