const Admin = require('../models/Admin')

exports.addAdmin = ({name, email, password}) => {
    const admin = new Admin();
    admin.name = name;
    admin.email = email;
    //admin.passwordHash = data.password;

    //this stores hashed value to .passwordHash
    admin.generatePasswordHash(password);
    
    return admin.save().then(user => ({
        name: user.name,
        email: user.email,
        id: user._id
    }))
}

exports.authenticateAdmin = ({email, password}) => {
    console.log("HERE1");
    return Admin.findOne({email})
        .then(admin => {
            if(admin && admin.isPasswordValid(password)) {
                console.log("HERE2");
                console.log(admin.genAdminObject());
                return admin.genAdminObject()
            } else {
                throw new Error('Invalid Credentials')
            }
        })
}

exports.verifyToken = (token) => {
    console.log('VERIFYTOKEN SERVICE');
    return Admin.verifyToken(token)
}