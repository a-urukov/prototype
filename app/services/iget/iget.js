'use strict';

/**
 * Сервис локализации
 * @type {*}
 */

var i18n = require('i18n'),

    wrapIget = function(lang) {

        return function() {
            i18n.setLang(lang);

            return i18n.iget.apply(i18n, arguments);
        };
    };

require('service-container').decl('iget', ['page-lang'], function(lang) {
    return wrapIget(lang);
});
