var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// When request comes in, it will be assigned to this variable.
const travel = (req, res) => {
    res.render('travel', {title: "Travlr Getaways - Travel", trips });     // Controller will render travel view
};

// Export the module
module.exports = {
    travel
};