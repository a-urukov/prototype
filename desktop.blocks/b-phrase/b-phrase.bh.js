module.exports = function(bh) {
    bh.match('b-phrase', function(ctx) {

        ctx.tag('tr');

        ctx.content([
            {
                elem: 'checkbox',
                content: {
                    block: 'checkbox',
                    mods: { theme: 'normal', size: 'm' }
                }
            },
            {
                elem: 'count',
                content: 'phrase&nbsp;' + ctx.ctx.count
            },
            {
                elem: 'ctr',
                field: 'ctr'
            },
            {
                elem: 'clicks',
                field: 'clicks'
            },
            {
                elem: 'input',
                content: {
                    block: 'input',
                    mods: { theme: 'normal', size: 'm' },
                    mix: { block: 'b-phrase', elem: 'price' },
                    content: { elem: 'control' }
                }
            }
        ])

    });

    bh.match('b-phrase_header_yes', function(ctx) {
        ctx.content([
            {
                elem: 'checkbox',
                content: {
                    block: 'checkbox',
                    mods: { theme: 'normal', size: 'm' }
                }
            },
            {
                elem: 'count',
                content: 'all phrases'
            },
            {
                elem: 'ctr',
                content: 'ctr'
            },
            {
                elem: 'clicks',
                content: 'clicks'
            },
            {
                elem: 'input',
                content: 'price'
            }
        ])
    });


    bh.match('b-phrase__checkbox', function(ctx) {
        ctx.tag('td')
    });

    bh.match('b-phrase__count', function(ctx) {
        ctx.tag('td')
    });

    bh.match('b-phrase__ctr', function(ctx) {
        ctx.tag('td')
    });

    bh.match('b-phrase__clicks', function(ctx) {
        ctx.tag('td')
    });

    bh.match('b-phrase__input', function(ctx) {
        ctx.tag('td')
    });


};
