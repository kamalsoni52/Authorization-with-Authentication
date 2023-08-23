const User = require("../models/users");

const {setUser} = require("../service/auth");

const handleUserSignUp = async (req,res) =>{
    const {name, email, password } =req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/login");
}

const handleUserLogin= async (req,res) =>{
    const { email, password } =req.body;
    const user = await User.findOne({
        email,
        password,
    });
    if(!user) return res.render("login",{
        error: "Invalid usrname or password",
    })

    const jwtToken = setUser(user);
    res.cookie("uid",jwtToken)
    return res.redirect("/");
}


module.exports = {
    handleUserSignUp,
    handleUserLogin
}