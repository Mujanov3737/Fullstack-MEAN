// When request comes in, it will be assigned to this variable.
const travel = (req, res) => {
    res.render('travel', {title: "Travlr Getaways - Travel"});     // Controller will render travel view
};

// Export the module
module.exports = {
    travel
}