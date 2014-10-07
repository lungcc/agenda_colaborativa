'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var EventoSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  body : {
    type: String,
    required: true,
    trim: false,
  },
  data : {
    type : Date,
    required: true,
  },
  img : {
    type: Array,
  },
});

module.exports = mongoose.model('Evento', EventoSchema);
