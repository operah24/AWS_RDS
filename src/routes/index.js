const express = require('express');
const router = express.Router();
const db = require('../model/users');

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

router.get('/users', async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await db.User.create({ name, email });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
