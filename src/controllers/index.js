const showHomePage = async (req, res) => {
    /*
        #swagger.description = 'This routes to the main webpage home page'
    */
    const title = 'Home';
    res.render('home', { title });
};

// Export any controller functions
export { showHomePage };