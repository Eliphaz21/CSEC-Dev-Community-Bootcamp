// Home Controller
exports.home = (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Express MVC Server"
    });
};

// About Controller
exports.about = (req, res) => {
    res.json({
        success: true,
        message: "This is the About page"
    });
};

// Contact Controller
exports.contact = (req, res) => {
    res.json({
        success: true,
        message: "Contact us anf this is contact page"
    });
};

// Dynamic Data Controller
exports.time = (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.json({
        success: true,
        time: currentTime
    });
};

// POST JSON Echo Controllerwith validation 
exports.echo = (req, res) => {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({
            success: false,
            message: "No JSON data provided"
        });
    }

    res.json({
        success: true,
        receivedData: data
    });
};
