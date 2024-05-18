const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/hotel-lunita-encantada', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

const reservationsRouter = require('./routes/reservations');
app.use('/api/reservations', reservationsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
