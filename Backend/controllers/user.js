const express = require("express");
const route = express.Router();
const bcrypt=require("bcrypt");
const joi=require("joi");
const User = require("../models/userSchema");
const getWebToken=require("../utils/genWebTokens");

// To register user in our system
route.post("/register", async (req, res) => {
    const schema=joi.object({
      name:joi.string().required(),
      email:joi.string().required().email(),
      password:joi.string().min(4).max(200).required(),
      mobile: joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required().messages({
        'number.min': 'Mobile number should be 10 digit.',
        'number.max': 'Mobile number should be 10 digit'
    })
    });
    const {error}=schema.validate(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    let user=await User.findOne({email:req.body.email});

    if(user) return res.status(400).send("User already exists");

    user=new User({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      mobile:req.body.mobile
    });

    const salt=await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(user.password,salt);

    await  user.save()
    const token=getWebToken(user);
    res.send(token);
    
  
});

//Logging in the user
route.post("/login", async (req, res) => {
  const schema=joi.object({
    email:joi.string().required().email(),
    password:joi.string().min(4).max(200).required(),
    
  });
  const {error}=schema.validate(req.body);

  if(error) return res.status(400).send(error.details[0].message);

  let user=await User.findOne({email:req.body.email});
  if(!user) return res.status(400).send("Invalid email or password");
  
  const isValid=await bcrypt.compare(req.body.password,user.password);

  if(!isValid) return res.status(400).send("Invalid email or password");

  const token=getWebToken(user);
  res.send("Logged In "+token);

  
});

module.exports = route;
