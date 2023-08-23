const jwt = require ("jsonwebtoken");
const secretKey = "Kamal$52625@"

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    }, secretKey)
    
}
function getUser(token) {
    try {
        return jwt.verify(token,secretKey);
        
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser
}