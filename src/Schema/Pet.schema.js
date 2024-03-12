const Joi = require("joi");

const { Schema } = require("../../Cua").Schemas;
module.exports = new Schema(
  Joi.object().keys({
    age: Joi.string(),
    name: Joi.string().length(255),
  })
);
