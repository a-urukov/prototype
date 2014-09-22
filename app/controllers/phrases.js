'use strict';

var AbstractController = require('./abstract.js');

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
        this._res.send('this is phrases');
    },

    all: function(a) {
        this._res.send('this is 100500 phrases ' + a);
    }

};

module.exports = Phrases;
