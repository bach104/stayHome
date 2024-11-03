const path = require('path');
const handlebars = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(morgan('combined'));

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// prettier : đẹp hơn

// lint-staged: xơ vải dàn dựng

// husky: hành động ,cam kết
