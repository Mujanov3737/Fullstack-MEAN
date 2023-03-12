// When request comes in, it will be assigned to this variable.
const news = (req, res) => {
    res.render('news', {title: "Travlr Getaways - News"});     // Controller will render view
};

// Export the module
module.exports = {
    news
}