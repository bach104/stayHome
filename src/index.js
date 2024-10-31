
const path = require('path')
const handlebars = require('express-handlebars')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

app.engine('hbs', handlebars.engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
console.log('views', path.join(__dirname, 'resource/views'));
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/new', (req, res) => {
  res.render('new')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})