const mongoose = require('mongoose')
const moment = require('moment');

const NewsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    imageUrl: { type: String, required: true },
    publishedAt: { type: Date, default: moment().format() }
})

module.exports = mongoose.model('News', NewsSchema)