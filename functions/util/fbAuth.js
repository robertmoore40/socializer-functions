const { admin, db } = require('./admin');

module.exports = (req, res, next) => {
    let idToken;
    if (  req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer ')
      ) 