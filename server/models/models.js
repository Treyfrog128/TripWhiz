const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const EventSchema = new Schema(
  {
    id: Number,
    name: String, 
    time: Date,
    location: String,
    weather: String
  }
);

const Events = mongoose.model("Events", EventSchema);

// export the new Schema so we could modify it using Node.js
module.exports = {
  Events
};