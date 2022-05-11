import Joi from 'joi';

const categorySchema = Joi.object().keys({
  title: Joi.string().required(),
  name: Joi.string().required(),
});

export default categorySchema;
