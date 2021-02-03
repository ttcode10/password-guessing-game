require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');
const connectDB = require('./utils/db');
const routes = require('./routes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
