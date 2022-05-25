const models = require('../models/models');

const eventController = {};

eventController.newEvent = (req, res, next) => {
  const { name, time, location } = req.body;
  models.Events.create({
    name: name, 
    time: time,
    location: location
  })
    .then(data => {
      res.locals.newEvent = data;
      next();
    })
    .catch(err => {
      next({
        log: `eventController.newEvent ERROR: ${err}`,
        message: { err: 'eventController.newEvent: ERROR: Incorrect data received' }
      });
    });
};