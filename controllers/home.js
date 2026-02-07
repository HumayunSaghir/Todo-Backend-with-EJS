function handleShowHomepage(req, res){
    return res.status(200).render("home", {
        user : req.user,
    })
}

module.exports = {
    handleShowHomepage,
}