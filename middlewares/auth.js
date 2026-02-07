const {verify} = require("../services/auth")

function softAuth(req, res, next){
    
    const token = req.cookies["token"]

    if(!token){
        console.log("user object not attached with request object.")
        return next()
    }

    const user = verify(token)
    console.log("user object attached with request object.")

    req.user = user
    next()
}

module.exports = softAuth