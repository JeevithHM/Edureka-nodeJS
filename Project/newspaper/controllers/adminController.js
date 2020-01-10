const adminService = require('../services/adminService')

exports.login = (req, res) => {
    adminService.authenticateAdmin(req.body)
        .then(admin => res.json(admin))
        .catch(err => res.status(401).json(err))
}

exports.register = (req, res) => {
    adminService.addAdmin(req.body)
        .then(admin => res.json(admin))
        .catch(err => res.status(401).json(err))
}