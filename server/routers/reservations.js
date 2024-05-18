const express = require('express');
const Reservation = require('../models/Reservation');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, date } = req.body;
  const reservation = new Reservation({ name, email, date });
  await reservation.save();
  res.json(reservation);
});

module.exports = router;
