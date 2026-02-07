const {Schema, model} = require('mongoose')
const {createHmac, randomBytes} = require("crypto")
const {sign} = require("../services/auth")

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

// creating the hook for hashing password. it will run before saving the document
usersSchema.pre("save", function(){
    // here this will represent the current document
    const user = this

    // incase if the password is modified, we have to hash the password
    if(user.isModified("password")){

        const salt = randomBytes(16).toString('hex')

        const hashedPassword = createHmac("sha256", salt)
            .update(user.password)
            .digest('hex')
        
        user.password = hashedPassword
        user.salt = salt
    }
})

// hook for matching password and returning token if credentials are correct
usersSchema.static("matchPassword", async function(email, password){

    // here this will refer to the collection.
    const user = await usersModel.findOne({email : email})

    if(!user){
        console.log("invalid email")
        throw new Error("Invalid Credentials")
    }

    const userHashedPassword = user.password
    const userSalt = user.salt

    const generatedHashedPassword = createHmac("sha256", userSalt)
        .update(password)
        .digest("hex")

    if(userHashedPassword !== generatedHashedPassword){
        console.log("invalid password")
        throw new Error("Invalid Credentials")
    }

    const token = sign(user)
    return token
})

const usersModel = new model("users", usersSchema)

module.exports = usersModel