const {Router} = require("express")
const {handleShowHomepage, handleShowProfilePage} = require("../controllers/home")

const router = Router()

router.get('/', handleShowHomepage)
router.get("/profile", handleShowProfilePage)

module.exports = router