// When request comes in, it will be assigned to this variable.
const rooms = (req, res) => {
    res.render('rooms', {title: "Travlr Getaways - Rooms"});     // Controller will render view
};

// Export the module
module.exports = {
    rooms
}