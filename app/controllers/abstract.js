'use strict';

var ServiceContainer = require('service-container');

/**
 * Абстрактный контроллер
 * @constructor
 */
function AbstractController(req, res) {
    this._req = req;
    this._res = res;

    this._serviceContainer = new ServiceContainer({
        request: this._req,
        response: this._res
    });
}

AbstractController.prototype = {
    get: {},
    post: {},
    put: {},
    delete: {}
};

module.exports = AbstractController;
