// When request comes in, it will be assigned to this variable.
const meals = (req, res) => {
    res.render('meals', {title: "Travlr Getaways - Meals"});     // Controller will render view
};

// Export the module
module.exports = {
    meals
}