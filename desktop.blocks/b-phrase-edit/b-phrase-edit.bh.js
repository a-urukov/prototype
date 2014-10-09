module.exports = function(bh) {


    bh.match('b-phrase-edit', function(ctx, json) {
        ctx.content([
                {
                    block: 'input',
                    mods: { theme: 'normal', size: 'm' }
                },
                json.mods.comment === 'yes' && {
                    block: 'input',
                    mods: { theme: 'normal', size: 'm', type: 'textarea' },
                    mix: { block: 'b-phrase-edit', elem: 'textarea' }
                },
                {
                    block: 'button',
                    mix: { block: 'b-phrase-edit', elem: 'save-button' },
                    mods: { theme: 'normal', size: 'm' },
                    text: 'improve'
                }
            ])
    });

};
