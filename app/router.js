'use strict';

var bh = require('../desktop.bundles/direct/direct.bh.js');

module.exports = {

    /**
     * Инициализирует роуты в приложении
     * @param {Object} app
     */
    init: function(app) {

        app.get('/', function(req, res) {
            var bemjson = bh.processBemJson({
                block: 'p-morda'
            });

            res.send(bh.apply(bemjson));
        });

    }

};
