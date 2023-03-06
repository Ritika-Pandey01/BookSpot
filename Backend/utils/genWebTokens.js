const jwt=require("jsonwebtoken");
const getWebToken=(user)=>{
    const secretKey=process.env.JWT_SECRET;
    const token=jwt.sign({
        _id:user._id,
        username:user.username,
        email:user.email,
        mobile:user.mobile
    },
    secretKey
    );
    return token;
};
module.exports=getWebToken;