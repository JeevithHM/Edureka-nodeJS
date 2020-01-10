const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const AdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true }
})

AdminSchema.methods.generatePasswordHash = function(password) {
    const salt = bcrypt.genSaltSync(10);
    this.passwordHash = bcrypt.hashSync(password, salt);
}

AdminSchema.methods.isPasswordValid = function(password) {
    console.log(bcrypt.compareSync(password, this.passwordHash))
    return bcrypt.compareSync(password, this.passwordHash);
}

AdminSchema.methods.genToken = function() {
    const payload = {
        email: this.email
    }
    return jwt.sign(payload, 'hello')
}

AdminSchema.statics.verifyToken = function(token) {
    try {
        console.log(jwt.verify(token, 'hello'))
        const payload = jwt.verify(token, 'hello')
        return payload
    } catch(e) {
        return null
    }
}

AdminSchema.methods.genAdminObject = function() {
    return {
        name: this.name,
        email: this.email,
        token: this.genToken()
    }
}

module.exports = mongoose.model('Admin', AdminSchema)