'use strict';

/**
 * Сервис получения баннера
 * @type {*}
 */
require('service-container').decl('banner', function() {

    var phrases = [];

    for (var i = 0; i < 2900; i++) {
        phrases.push({
            pid: i,
            text: 'Фраза №' + (i + 1),
            ctr: 4,
            clicks: Math.round(Math.random() * 100),
            price: 4
        });
    }

    return {
        bid: 1,
        title: 'banner',
        phrases: phrases
    };
});
