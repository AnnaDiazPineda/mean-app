const cors = require('cors');
const express = require('express');
const app = express();
//const indexRoute = require('./routes/index');
const taskRoute  = require('./routes/task');
//vistas html
const path = require('path');

//settings
    //si hi ha un port del sistema operatiu fes-ho servir, sino el 3000
    app.set('port', process.env.PORT || 3000);
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'ejs');
    app.set('views' , path.join(__dirname, 'views') );

//Middelwares
    app.use(cors());
    app.use(express.json());
    //rebre dades de formularis
    app.use(express.urlencoded({extended: false}));

    //routes
    //app.use(indexRoute);
    app.use('/api',taskRoute);

    //statics files
        //en static le pasamos tot el codigo html, css etc
    app.use(express.static(path.join(__dirname, 'dist')));

    //starrt server
    app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});

