module.exports = function(bh) {
    bh.match('b-phrase', function(ctx, json) {

        ctx
            .tag('tr')
            .js(true)
            .content([
                {
                    elem: 'checkbox',
                    content: {
                        block: 'checkbox',
                        mods: { theme: 'normal', size: 'm' }
                    }
                },
                {
                    elem: 'phrase',
                    content: {
                        block: 'dropdown',
                        mods: { switcher : 'link', theme : 'normal' },
                        switcher: 'phrase&nbsp;' + json.count,
                        popup: {
                            block: 'b-phrase-edit',
                            mods: { comment: json.count % 2 ? 'yes' : ''},
                            pid: json.count
                        }
                    }
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
            ]);
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
                elem: 'phrase',
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


    bh.match('b-phrase__ctr', function(ctx) {
        ctx.tag('td')
    });

    bh.match('b-phrase__clicks', function(ctx) {
        ctx.tag('td')
    });

    bh.match('b-phrase__input', function(ctx) {
        ctx.tag('td')
    });

    bh.match('b-phrase__phrase', function(ctx) {
        ctx.tag('td')
    });

};
