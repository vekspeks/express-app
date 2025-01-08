const authMiddleware = (req, res, next) =>{
    const cookie = req.cookies["express-app-user"];
    const email = cookie;

    if (email) {
        req.userEmail = email;
    } else {
        req.userEmail = null;
    }
    next();
};

module.exports = authMiddleware;