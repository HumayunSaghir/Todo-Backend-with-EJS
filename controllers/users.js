const userModel = require("../models/users")
const {sign} = require("../services/auth")

function handleShowLoginPage(req, res){
    return res.status(200).render('loginPage')
}

async function handleLoginValidation(req, res){
    const {email, password} = req.body
    let token;

    try{
        token = await userModel.matchPassword(email, password)
        
        res.cookie("token", token)
    }
    catch(error){
        return res.status(401).render('loginPage', {
            message : error.message
        })
    }

    return res.status(200).redirect('/')
}

function handleShowSignupPage(req, res){
    return res.status(200).render("signup")
}

async function handleSignupValidation(req, res){
    const {username, email, password} = req.body

    const createdUser = await userModel.create({
        username : username,
        email : email,
        password : password,
    })

    // sending cookie or token to the client
    const token = sign(createdUser)
    res.cookie("token", token)

    return res.status(201).redirect('/')
}

module.exports = {
    handleShowLoginPage,
    handleLoginValidation,
    handleShowSignupPage,
    handleSignupValidation,
}