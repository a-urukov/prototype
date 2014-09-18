'use strict';

module.exports = {

    /**
     * Инициализирует роуты в приложении
     * @param {Object} app
     */
    init: function(app) {

        app.get('/', function(req, res) {
            res.send('test');
        });

    }

};
