const {Router} = require("express")
const {handleShowLoginPage, handleLoginValidation, handleShowSignupPage, handleSignupValidation, handleLogoutFunctionality} = require("../controllers/users")

const router = Router()

router.get("/login", handleShowLoginPage)
router.post('/login', handleLoginValidation)
router.get('/signup', handleShowSignupPage)
router.post('/signup', handleSignupValidation)
router.get('/logout', handleLogoutFunctionality)

module.exports = router