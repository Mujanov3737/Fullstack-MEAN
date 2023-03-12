// When request comes in, it will be assigned to this index variable.
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways'})     // Controller will render index page with title as a response
};

// Export the index module
module.exports = {
    index
}