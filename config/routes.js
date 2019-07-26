
const pictures = require('../controllers/pictures')
const users = require('../controllers/users')

module.exports = function(app){
app.get('/pictures', pictures.getAll)
app.get('/pictures/:id', pictures.getOne)
app.post('/pictures', pictures.addOne)
app.patch('/pictures/:id', pictures.updateOne)
app.delete('/pictures/:id', pictures.deletePicture)
app.get('/users/:id', users.getProfile)
app.post('/users', users.addProfile)
app.patch('/users/:id', users.updateProfile)
}






