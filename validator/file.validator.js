const Joi = require('joi');

const categorySchema = {
    name: Joi.string().allow(null).valid('New', 'Exisiting').error(new Error('Invalid category'))
};

const schema = {
    name: Joi.string().required().error(new Error('Invalid name!')),
    title: Joi.string().required().error(new Error('Invalid title!')),
    pages: Joi.array().required().error(new Error('Invalid pages!')),
    category: categorySchema
   
};
module.exports= schema;