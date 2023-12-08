const UserModel = require('../models/users.model')
const bcrypt =require('bcryptjs')
const jwt =require('jsonwebtoken')
const Register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10)
        req.body.password = hash;
        req.body.role = "ENTREPRISE"
        await UserModel.create(req.body).then(data => {
            res.send(data);
        })
        res.status(200).json({
            message: "success",
            data: result,
        })
       

    }
    catch (error) {
        res.status(404).json(error.message)
    }
    
};
const Login = async (req, res) => {
    try {
        UserModel.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                     res.status(404).json({ message: 'not found' })
                } else {
                    bcrypt.compare(req.body.password, user.password)
                        .then(isMatch => {
                            if (!isMatch) {
                                errors.password = "incorrect password"
                                  res.status(404).json(errors)
                               
    
                            } else {
                                var token = jwt.sign({
                                    id: user._id,
                                    name: user.name,
                                    email: user.email,
                                    role: user.role
                                }, process.env.PRIVATE_KEY, { expiresIn: '24h' });
                                 res.status(200).json({
                                    message: "success",
                                    token: token
                                })
                            }
                        })
                }
            })
    } catch (error) {
      return   res.status(404).json(error.message)
        
    }
};
/*const Test = (req, res) => {
    // verify a token symmetric
    res.send("welcome user")
};
const Admin = (req, res) => {
    // verify a token symmetric
    res.send("welcome admin")
};*/
module.exports = {
    Register,
    Login,
   // Test,Admin
   
}