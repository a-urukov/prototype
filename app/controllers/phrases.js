'use strict';

var AbstractController = require('./abstract.js'),
    bh = require('../../desktop.bundles/direct/direct.bh.js');

/**
 * Фразы
 * @constructor
 */
function Phrases(req, res) {
    AbstractController.apply(this, arguments);
}

Phrases.prototype = Object.create(AbstractController.prototype);

Phrases.prototype.get = {

    index: function() {

        this._serviceContainer.require(['user'], function(user) {

            bh.setOptions({ jsAttrName: 'data-bem', jsAttrScheme: 'json' });

            var bemjson = bh.processBemJson({
                block: 'b-page',
                content: {
                    block: 'p-phrases',
                    model: {
                        phrases: [
                            {
                                ctr: 2,
                                clicks: 3,
                                price: 4
                            },
                            {
                                ctr: 5,
                                clicks: 6,
                                price: 7
                            }
                        ]
                    }
                }
            });

            this._res.send(bh.apply(bemjson));
        }.bind(this));
    },

    all: function() {

        this._serviceContainer.require(['user'], function(user) {
            var phrases = [];

            for (var i = 0; i < 2900; i++) {
                phrases.push({
                    ctr: 2,
                    clicks: 3,
                    price: 4
                });
            }

            bh.setOptions({ jsAttrName: 'data-bem', jsAttrScheme: 'json' });

            var bemjson = bh.processBemJson({
                block: 'b-page',
                content: {
                    block: 'p-phrases',
                    model: {
                        phrases: phrases
                    }
                }
            });

            this._res.send(bh.apply(bemjson));
        }.bind(this));
    }

};

module.exports = Phrases;
