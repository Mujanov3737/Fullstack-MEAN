// When request comes in, it will be assigned to this variable.
const contact = (req, res) => {
    res.render('contact', {title: "Travlr Getaways - Contact"});     // Controller will render view
};

// Export the module
module.exports = {
    contact
};