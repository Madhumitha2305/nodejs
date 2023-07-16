const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Todo App');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

