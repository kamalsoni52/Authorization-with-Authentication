const URL = require("../models/url")

 const handleHomePage = async (req,res) =>{
    const allUrls = await URL.find({ createdBy: req.user._id})

    res.render("home", {
      "allUrls": allUrls
    })

 }

  const handleRedirectURL = async (req,res) =>{
  const shortId = req.params.id
  console.log(shortId)
  const entry = await URL.findOneAndUpdate(
       { 
           shortId,
       },
       {
           $push: {
               visitHistory : {
                   timestamp: Date.now()
               }
           }
       }
   );
   if(!entry) return res.redirect("/")
   console.log(entry.redirectURL)
   return res.status(300).redirect(entry.redirectURL)
}

const handleSignUpPage = (req,res) =>{
    res.render("signup")
}
const handleLoginPage = (req,res) =>{
    res.render("login")
}

const handleAdminPage = async (req,res) => {
    const allUrls = await URL.find({})
    res.render("admin",{
        "allUrls": allUrls
    })
}
 module.exports = {
   handleRedirectURL,
    handleHomePage,
    handleSignUpPage,
    handleLoginPage,
    handleAdminPage
 }