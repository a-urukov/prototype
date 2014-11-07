module.exports = function(bh) {


    bh.match('b-phrase-edit', function(ctx, json) {
        ctx
            .js(true)
            .content({
                block: 'popup',
                js: true,
                mods: { theme: 'normal', target: 'anchor', autoclosable: true },
                mix: { block: 'b-phrase-edit', elem: 'popup' },
                content: [
                    {
                        block: 'input',
                        mods: { theme: 'normal', size: 'm' }
                    },
                    json.mods && json.mods.comment === 'yes' && {
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
                ]
            })
    });

};
