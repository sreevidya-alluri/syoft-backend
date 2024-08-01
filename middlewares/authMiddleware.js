const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authenticateToken = async(req,res,next)=>{
    const token = req.header('Authorization');

  if (!token) return res.status(400).json({ message: 'Token not provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
const authorizeToken =  (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    };
  };
module.exports={authenticateToken,authorizeToken}