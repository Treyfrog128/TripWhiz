const express = require('express');
const eventController = require('../controllers/eventController');
const eventRouter = express.Router();

eventRouter.post('/newevent',
  eventController.newEvent,
  (req, res) => res.status(200).json(res.locals.newEvent)
);

eventRouter.get('/verifyevent',
  eventController.verifyEvent,
  (req, res) => res.status(200).json(res.locals.foundEvent)
);


module.exports = eventRouter;