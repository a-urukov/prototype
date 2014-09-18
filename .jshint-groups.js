module.exports = {
    options: {
        strict: true,
        bitwise: true,
        eqeqeq: true,
        forin: true,
        freeze: true,
        immed: true,
        indent: 4,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonbsp: true,
        quotmark: 'single',
        undef: true,
        unused: true,
        trailing: true,
        maxlen: 120,

        asi: false,
        lastsemic: true,

        '-W030': false
    },
    groups: {
        'desktop.blocks.js': {
            options: {
                browser: true,
                globals: {
                    '$': false,
                    'BEM': false,
                    'Lego': false,
                    BEMHTML: false
                },
                strict: false

            },
            includes: [
                'desktop.blocks/**/*.js'
            ],
            excludes: [
                'desktop.blocks/**/*.deps.js',
                'desktop.blocks/i-translation/i-translation.tr.js',
                'desktop.blocks/i-translation/i-translation.ru.js',
                'desktop.blocks/i-translation/i-translation.en.js',
                'desktop.blocks/i-translation/i-translation.uk.js',
                'desktop.blocks/i-translation/i-translation.js'
            ]
        },
        app: {
            options: {
                node: true,
                newcap: false,
                unused: false // выключено, потому как много недоделаных методов пока с незаюзаными переменными
            },
            includes: [
                'app/**',
                'app/**/*.js'
            ]
        },
        bemtree: {
            options: {
                strict: false,
                maxlen: 1000,
                indent: false,
                globals: {
                    block: false,
                    elem: false,
                    mode: false,
                    js: false,
                    match: false,
                    iget: false,
                    getUrl: false,
                    formatUrl: false,
                    applyNext: false,
                    applyCtx: false,
                    apply: false
                }
            },
            includes: [
                'desktop.blocks/**/*.bemtree'
            ]
        }
    }
};
