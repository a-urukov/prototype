'use strict';

var AbstractController = require('./abstract.js'),
    bh = require('../../desktop.bundles/direct/direct.bh.js');

/**
 * Главная страница
 * @constructor
 */
function Index(req, res) {
    AbstractController.apply(this, arguments);
}

Index.prototype = Object.create(AbstractController.prototype);

Index.prototype.get = {

    index: function() {

        var bemjson = bh.processBemJson({
            block: 'b-page',
            content: {
                block: 'p-morda',
                model: {
                    title: 'My header',
                    content: 'My content',
                    inside: {
                        inside: 'inside model'
                    }
                }
            }
        });

        this._res.send(bh.apply(bemjson));
    }

};

module.exports = Index;
