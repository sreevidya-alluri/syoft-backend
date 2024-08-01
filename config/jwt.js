const jwt = require("jsonwebtoken");

const generateToken = (user) =>{
    return jwt.sign(
      {id:user_id,role:user.role},
      process.env.JWT_SECRET,
      {expiresIn: "72h",}  
    )
}
module.exports = generateToken;