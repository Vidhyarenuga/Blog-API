const crypto = require('crypto').randomBytes(256).toString('hex')


module.exports = {
    uri: 'mongodb://localhost:27017/cubereum-blog',
    secret: crypto,
    db: 'cubereum-blog'
}