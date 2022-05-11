import Joi from 'joi';

const filmSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string(),
  release_year: Joi.number().integer().min(1400).max(2060),
  language_id: Joi.number().integer().required(),
});

export default filmSchema;
