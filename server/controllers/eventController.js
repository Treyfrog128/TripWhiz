const models = require('../models/models');

const eventController = {};

eventController.newEvent = (req, res, next) => {
  console.log('req.body: ', req.body)
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

eventController.getEvent = (req, res, next) => {
  models.Events.find().exec()
    .then(data => {
      res.locals.foundEvent = data;
      next();
    })
    .catch(err => {
      next({
        log: `eventController.getEvent ERROR: ${err}`,
        message: { err: 'eventController.getEvent: ERROR: Incorrect data received' }
      });
    });
};

module.exports = eventController;