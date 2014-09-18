'use strict';

var app = module.exports;

/**
 * Инициализирвать приложение
 */
app.init = function() {
    var express = require('express'),
        expressApp = express();

    expressApp.enable('trust proxy');

    expressApp
        .use(express.urlencoded())
        .use(express.cookieParser())
        .use('/bundles', express.static(__dirname + '/../desktop.bundles/direct'))
        .use(express.errorHandler());

    // Регистрация роутов
    require('./router').init(expressApp);

    expressApp.listen(8080);
};
