const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect(
        process.env.CONNECTION_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => console.log('DB Connected')
    )
}