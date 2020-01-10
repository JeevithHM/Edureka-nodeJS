const adminService = require('../../services/adminService');

exports.authenticate = (req, res, next) => {
    const token = !!req.headers['authorization'] ? req.headers['authorization'] : null;
    //console.log(req.headers['authorization'])
    if(adminService.verifyToken(token)) {
        next();
    } else {
        res.status(401).json({
            msg: 'Not Authorized'
        })
    }
}

exports.loginValidator = (req, res, next) => {
    const { email, password } = req.body
    let errors = {}

    if(!email) errors.email = 'Email cannot be blank.'
    if(!password) errors.password = 'Password cannot be blank.'

    if(Object.keys(errors).length) {
        res.status(400).json(errors)
    } else {
        next()
    }
}

exports.registerValidator = (req, res, next) => {
    const { name, email, password } = req.body;
    let errors = {}

    if(!name) errors.name = 'Name cannot be blank.'
    if(!email) errors.email = 'Email cannot be blank.'
    if(!password) errors.password = 'Password cannot be blank.'

    if(Object.keys(errors).length) {
        res.status(400).json(errors)
    } else {
        next()
    }
}