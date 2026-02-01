const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// ✅ Proper CORS configuration
app.use(cors({
  origin: 'https://bugeagle-frontend.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;
