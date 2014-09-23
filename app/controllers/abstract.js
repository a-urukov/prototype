'use strict';

/**
 * Абстрактный контроллер
 * @constructor
 */
function AbstractController(req, res) {
    this._req = req;
    this._res = res;
}

AbstractController.prototype = {
    get: {},
    post: {},
    put: {},
    delete: {}
};

module.exports = AbstractController;
