module.exports = function(config) {

    config.setLanguages(['ru', 'uk', 'by', 'kz', 'en', 'tr']);

    config.node('desktop.bundles/direct', function(nodeConfig) {

        // уровни - декларации - зависимости - файлы
        nodeConfig.addTechs([
            [ require('enb/techs/levels'), { levels: getLevels(config) } ],
            [ require('enb/techs/file-provider'), { target: '?.bemdecl.js' } ],
            require('enb/techs/deps-old'),
            require('enb/techs/files')
        ]);

        // локализационные js
        nodeConfig.addTechs([
            [ require('enb/techs/i18n-merge-keysets'), { lang: 'all' }],
            [ require('enb/techs/i18n-merge-keysets'), { lang: '{lang}' }],
            [ require('enb/techs/i18n-lang-js'), { lang: 'all' } ],
            [ require('enb/techs/i18n-lang-js'), { lang: '{lang}' } ],
            [ require('enb/techs/js-i18n'), { target: '?.{lang}.pre.js', lang: '{lang}' } ]
        ]);

        // клиентский bemhtml
        nodeConfig.addTechs([
            [ require('enb/techs/bemdecl-from-deps-by-tech'), { target: '?.bemhtml.bemdecl.js', sourceTech: 'js', destTech: 'bemhtml' } ],
            [ require('enb/techs/deps-old'), { bemdeclTarget: '?.bemhtml.bemdecl.js', depsTarget: '?.bemhtml.deps.js' } ],
            [ require('enb/techs/files'), { filesTarget: '?.bemhtml.files', dirsTarget: '?.bemhtml.dirs', depsTarget: '?.bemhtml.deps.js' } ]
        ]);

        // склеиваем: клиентский bemhtml + локализационные js
        nodeConfig.addTechs(config.getLanguages().map(function(lang) {
            return [ require('enb/techs/file-merge'), { sources: ['?.client.bemhtml.js', '?.' + lang + '.pre.js'], target: '?.' + lang + '.js' } ]
        }));

        // css + ie*.css
        nodeConfig.addTechs([
            require('enb/techs/css'),
            require('enb/techs/css-ie'),
            [require('enb/techs/css-ie6'), { sourceSuffixes: ['css', 'ie.css', 'ie6.css']}],
            [require('enb/techs/css-ie7'), { sourceSuffixes: ['css', 'ie.css', 'ie7.css']}],
            [require('enb/techs/css-ie8'), { sourceSuffixes: ['css', 'ie.css', 'ie8.css']}],
            [require('enb/techs/css-ie9'), { sourceSuffixes: ['css', 'ie9.css']}]
        ]);

        // серверный bemhtml + локализационный bemtree
        nodeConfig.addTechs([
            [
                require('./enb-techs/bemtree-i18n'),
                {
                    langTargets: ['all']
                        .concat(config.getLanguages())
                        .map(function(lang) {
                            return '?.lang.' + lang + '.js'
                        })
                }
            ]
        ]);

        nodeConfig.addTargets([
            '_?.bemtree.js',
            '_?.{lang}.js',
            '_?.css',
            '_?.ie.css',
            '_?.ie6.css',
            '_?.ie7.css',
            '_?.ie8.css',
            '_?.ie9.css'
        ]);
    });

    config.mode('development', function() {
        config.node('desktop.bundles/direct', function(nodeConfig) {
            nodeConfig.addTechs([
                [ require('enb-bemhtml/techs/bemhtml'), { devMode: true } ],
                [ require('enb-bemhtml/techs/bemhtml'), { filesTarget: '?.bemhtml.files', target: '?.client.bemhtml.js', devMode: true } ],
                [ require('enb-bemxjst/techs/bemtree'), { sourceSuffixes: 'bemtree', target: '?.bemtree.js', devMode: true } ],
                [ require('enb/techs/borschik'), { sourceTarget: '?.all.bemtree.js', destTarget: '_?.bemtree.js', minify: false } ],
                [ require('enb/techs/borschik'), { sourceTarget: '?.{lang}.js', destTarget: '_?.{lang}.js', minify: false } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.css', destTarget: '_?.css', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.ie.css', destTarget: '_?.ie.css', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.ie6.css', destTarget: '_?.ie6.css', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.ie7.css', destTarget: '_?.ie7.css', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.ie8.css', destTarget: '_?.ie8.css', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.ie9.css', destTarget: '_?.ie9.css', minify: true } ]
            ]);
        });
    });

    config.mode('production', function() {
        config.node('desktop.bundles/direct', function(nodeConfig) {
            nodeConfig.addTechs([
                [ require('enb-bemhtml/techs/bemhtml'), { devMode: false } ],
                [ require('enb-bemhtml/techs/bemhtml'), { filesTarget: '?.bemhtml.files', target: '?.client.bemhtml.js', devMode: false } ],
                [ require('enb-bemxjst/techs/bemtree'), { sourceSuffixes: 'bemtree', target: '?.bemtree.js', devMode: false } ],
                [ require('enb/techs/borschik'), { sourceTarget: '?.all.bemtree.js', destTarget: '_?.bemtree.js', minify: false } ],
                [ require('enb/techs/borschik'), { sourceTarget: '?.{lang}.js', destTarget: '_?.{lang}.js', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.css', destTarget: '_?.css', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.ie.css', destTarget: '_?.ie.css', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.ie6.css', destTarget: '_?.ie6.css', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.ie7.css', destTarget: '_?.ie7.css', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.ie8.css', destTarget: '_?.ie8.css', minify: true } ],
                [ require('enb/techs/borschik'), { freeze: true, sourceTarget: '?.ie9.css', destTarget: '_?.ie9.css', minify: true } ]
            ]);
        });
    });

};

function getLevels(config) {

    return [
        { path: 'libs/bem-bl/blocks-common', check: false },
        { path: 'libs/bem-bl/blocks-desktop', check: false },
        { path: 'libs/romochka/blocks-common', check: false },
        { path: 'libs/romochka/blocks-desktop', check: false },
        { path: 'libs/islands-components/common.blocks', check: false },
        { path: 'libs/islands-components/desktop.blocks', check: false },
        { path: 'libs/adv-blocks', check: false },
//        { path: 'libs/bem-mvc/common.blocks', check: true },
        'common.blocks',
        'desktop.blocks'
    ]
        .map(function(levelPath) {
            return config.resolvePath(levelPath);
        });

}
