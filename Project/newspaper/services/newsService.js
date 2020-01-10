const News = require('../models/News')

exports.add = (data) => {
    const news = new News();
    news.title = data.title;
    news.description = data.description;
    news.url = data.url;
    news.imageUrl = data.imageUrl;
    
    return news.save();
}

exports.get = () => {
    return News.find();
}

exports.edit = (id, data) => {
    return News.findById(id)
        .then(news => {
            news.title = data.title;
            news.description = data.description;
            news.url = data.url;
            news.imageUrl = data.imageUrl;

            return news.save();
        })
}

exports.delete = (id) => {
    return News.findByIdAndDelete(id);
}