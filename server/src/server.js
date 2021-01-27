require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./utils/db');
const routes = require('./routes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
