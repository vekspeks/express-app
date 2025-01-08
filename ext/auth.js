const authMiddleware = (req, res, next) =>{
    const cookie = req.cookies["express-app-user"];
    const email = cookie;

    if (email) {
        req.userEmail = email;
    } else {
        req.userEmail = null;
    }
    console.log();
    next();
};

module.exports = authMiddleware;