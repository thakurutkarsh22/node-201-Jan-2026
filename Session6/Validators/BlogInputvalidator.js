const joi = require("joi");

const blogInputSchema = joi.object({
    title: joi.string().min(3).max(100).alphanum().required(),
    content: joi.string().required(),
    author: joi.string().required(),
});

// data -> req.body
// {

//     "title": "%%%%%%5",
//     "content": "hellotonewcontent2",
//     "author": "utkarsh2",
//     "asdadasda":"asdasdaasd",
//     "adasdsadasda":"adadasdad"
// }
function validateBlogInput(data) {
    return blogInputSchema.validate(data);
}

module.exports = { validateBlogInput };