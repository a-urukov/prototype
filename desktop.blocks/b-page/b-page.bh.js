module.exports = function(bh) {
    bh.match('b-page', function(ctx) {

        ctx.
            tag('html').
            content([
            {
                elem: 'head',
                content: [
                    { elem: 'style', src: '/bundles/direct.css' },
                    { elem: 'script', src: '//yastatic.net/jquery/2.1.1/jquery.min.js' },
                    { elem: 'script', src: '/bundles/direct.js' }
                ]
            },
            {
                elem: 'body',
                content: [
                    {
                        elem: 'header',
                        content: [
                            {
                                elem: 'logo',
                                content: 'DIRECT'
                            },
                            {
                                elem: 'navigation',
                                content: [
                                    {
                                        block: 'link',
                                        mix: { block: 'b-page', elem: 'nav-link' },
                                        url: '/',
                                        content: 'morda'
                                    },
                                    '&nbsp;|&nbsp;',
                                    {
                                        block: 'link',
                                        mix: { block: 'b-page', elem: 'nav-link' },
                                        url: '/phrases',
                                        content: 'phrases'
                                    }
                                ]
                            }
                        ]
                    },
                    { elem: 'content', content: ctx.content() }
                ]
            }
        ], true)

    });

    bh.match('b-page__head', function(ctx) {
        ctx.tag('head');
    });

    bh.match('b-page__body', function(ctx) {
        ctx.tag('body');
    });

    bh.match('b-page__style', function(ctx) {
        ctx
            .tag('link')
            .attrs({ rel: 'stylesheet', href: ctx.ctx.src });
    });

    bh.match('b-page__script', function(ctx) {
        ctx
            .tag('script')
            .attrs({ src: ctx.ctx.src });
    });

};
