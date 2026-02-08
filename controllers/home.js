function handleShowHomepage(req, res){
    return res.status(200).render("home", {
        user : req.user,
    })
}

function handleShowProfilePage(req, res){
    console.log(req.user.name)
    return res.status(200).render("profile", {
        user : req.user,
    })
}

module.exports = {
    handleShowHomepage,
    handleShowProfilePage,
}