const express = require("express");
const { 
    handleHomePage,
    handleRedirectURL,
    handleSignUpPage,
    handleLoginPage,
    handleAdminPage
     } = require("../controllers/staticURL");
const { restrictTo } = require("../middleware/auth");

const staticRouter = express.Router();

staticRouter.get("/admin", restrictTo("ADMIN"),handleAdminPage)

staticRouter.get("/signup", handleSignUpPage)
staticRouter.get("/login", handleLoginPage)

staticRouter.get("/", restrictTo(["NORMAL", "ADMIN"]),handleHomePage)
staticRouter.get("/:id", handleRedirectURL);

module.exports = staticRouter;

