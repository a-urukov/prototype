module.exports = function(bh) {
    bh.match('p-phrases', function(ctx) {

        ctx
            .js(true)
            .content([
                {
                    elem: 'phrases',
                    phrases: ctx.ctx.model.phrases
                },
                {
                    elem: 'controls',
                    content: [
                        {
                            elem: 'controls-row',
                            content: [
                                {
                                    block: 'button',
                                    mods: { theme: 'normal', size: 'm' },
                                    text: 'On'
                                },
                                {
                                    block: 'button',
                                    mods: { theme: 'normal', size: 'm' },
                                    text: 'Off'
                                },
                                {
                                    block: 'button',
                                    mods: { theme: 'normal', size: 'm' },
                                    mix: { block: 'p-phrases', elem: 'show-all' },
                                    text: 'Show all'
                                },
                                {
                                    elem: 'loading',
                                    tag: 'span',
                                    content: 'loading...'
                                }
                            ]
                        },
                        {
                            elem: 'controls-row',
                            content: [
                                {
                                    block: 'button',
                                    mods: { theme: 'normal', size: 'm' },
                                    text: 'Save'
                                }
                            ]
                        }
                    ]
                }
            ]);

    });

    bh.match('p-phrases__phrases', function(ctx) {

        ctx
            .tag('table')
            .content(
                [{ block: 'b-phrase', mods: { header: 'yes' } }]
                .concat(ctx.ctx.phrases.map(function(phrase, i) {
                    return {
                        block: 'b-phrase',
                        count: i,
                        model: phrase
                    }
                })))

    });

};
