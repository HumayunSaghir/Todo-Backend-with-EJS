function handleShowLoginPage(req, res){
    return res.status(200).render('loginPage')
}

module.exports = {
    handleShowLoginPage,
}