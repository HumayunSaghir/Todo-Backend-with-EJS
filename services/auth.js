const JWT = require("jsonwebtoken")
const secretKey = "$hroud3296"

// sign payload and generate token
function sign(user){

    const payload = {
        name : user.username,
        email : user.email,
    }

    const token = JWT.sign(payload, secretKey)
    return token
}

// verifying token return payload
function verify(token){
    const user = JWT.verify(token, secretKey)
    return user
}

module.exports = {
    sign,
    verify,
}