const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Basic route to test API
app.get('/', (req, res) => {
  res.send('API is running');
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
})
.catch(err => console.error('MongoDB connection error:', err));
