'use strict';

var fs = require('fs');

module.exports = {

    /**
     * Инициализирует роуты в приложении
     * @param {Object} app
     */
    init: function(app) {

        app.all('*', function(req, res) {
            var path = req.params[0].split('/').filter(function(p) { return p }),
                method = req.method.toLowerCase(),
                controllerPath = __dirname + '/controllers/' + (path[0] || 'index') + '.js',
                controller = fs.existsSync(controllerPath) && new (require(controllerPath))(req, res),
                action = path[1] || 'index';

            if (controller && controller[method] && controller[method][action]) {
                controller[method][action].apply(controller, path.splice(2));
            } else {
                res.send(404);
            }
        });

    }

};
