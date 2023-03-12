// When request comes in, it will be assigned to this variable.
const about = (req, res) => {
    res.render('about', {title: "Travlr Getaways - About"});     // Controller will render view
};

// Export the module
module.exports = {
    about
}