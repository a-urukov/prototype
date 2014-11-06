var app = module.exports;

models = {};

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
        .use('/static', express.static(__dirname + '/../libs'))
        .use(express.errorHandler());

    // Регистрация роутов
    require('./router').init(expressApp);
    require('backbone');

    expressApp.listen(8080);
};
