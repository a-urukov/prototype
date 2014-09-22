'use strict';

var AbstractController = require('./abstract.js');

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
        this._res.send('this.isMorda=true');
    }

};

module.exports = Index;
