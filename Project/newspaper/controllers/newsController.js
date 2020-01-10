const newsService = require('../services/newsService')

exports.addNews = (req, res) => {
    newsService.add(req.body)
        .then(news => res.json(news))
        .catch(err => res.statu(500).json(err));
}

exports.getNews = (req, res) => {
    newsService.get()
        .then(news => res.json(news))
        .catch(err => res.statu(500).json(err));
}

// exports.editNews = (req, res) => {
//     newsService.edit(req.body)
//         .then(news => res.json(news))
// }

exports.deleteNews = (req, res) => {
    const id = req.params.id;
    newsService.delete(id)
        .then(() => res.json({err:"Deleted"}))
        .catch(err => res.statu(500).json(err));
}