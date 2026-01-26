const { validateBlogInput } = require("../Validators/BlogInputvalidator");
function blogInputValidation(req, res, next) {
    

    const { error } = validateBlogInput(req.body);

    if (error) {
        return res.status(400).json({ message: "Invalid blog input", details: error });
    }

    // if no error -> pass to next middleware or controller
    next();
}

module.exports = blogInputValidation;