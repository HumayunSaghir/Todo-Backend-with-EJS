const {Router} = require("express")
const {handleShowLoginPage} = require("../controllers/users")

const router = Router()

router.get("/login", handleShowLoginPage)

module.exports = router