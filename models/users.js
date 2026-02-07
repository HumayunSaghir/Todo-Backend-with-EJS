const {Schema, model} = require('mongoose')
const {createHmac, randomBytes} = require("crypto")

// user schema
const usersSchema = new Schema({
    username : {
        type : String,
        requried : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },
    
    password : {
        type : String,
        required : true,
    },

    salt : {
        type : String,
    },

}, {timestamps : true})

const usersModel = new model("users", usersSchema)

// creating the hook for hashing password. it will run before saving the document
// usersSchema.pre('save', function(){
//     // here this will represent the current document
//     const user = this

//     // incase if the password is modified, we have to hash the password
//     if(user.isModified("password")){

//         const salt = randomBytes(16).toString('hex')

//         const hashedPassword = createHmac("sha256", salt)
//             .update(user.password)
//             .digest('hex')
        
//         user.password = hashedPassword
//         user.salt = salt
//     }
// })

// token generation is pending.

module.exports = usersModel