const { postPhoto } = require('./../model/queries/postPhoto');

exports.get = (req, res, next) => {    
    return postPhoto(req.body.url, req.body.review)
    .then(res.redirect('/'))
    .catch((err) => {
        console.log(err);
        next(err);
    });
  next();
};