require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI

const CLIENT_URL = process.env.ALLOWED_ORIGIN || 'http://localhost:3000'; // TODO: Replace this with frontend's URL (for production) (Done!)
const corsOptions = {
  origin: CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

mongoose.connect(MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use('/api/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
