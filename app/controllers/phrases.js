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

Phrases.prototype._show = function(limit) {
    (require('mapping')).map('banner', this._serviceContainer.getService('banner')).then(function(banner) {

        bh.setOptions({ jsAttrName: 'data-bem', jsAttrScheme: 'json' });

        limit && (banner.phrases = banner.phrases.slice(0, limit));

        var bemjson = bh.processBemJson({
            block: 'b-page',
            content: {
                block: 'p-phrases',
                model: banner
            }
        });

        this._res.send(bh.apply(bemjson));
    }.bind(this)).done();
};

Phrases.prototype.get = {

    index: function() {
        this._show(10);
    },

    all: function() {
        if (!this._req.xhr) {
            this._show();
        } else {
            (require('mapping')).map('banner', this._serviceContainer.getService('banner')).then(function(banner) {
                var bemjson = bh.processBemJson({
                    block: 'p-phrases',
                    elem: 'phrases',
                    phrases: banner.phrases
                });

                this._res.send(bh.apply(bemjson));
            }.bind(this));
        }
    }

};

module.exports = Phrases;
