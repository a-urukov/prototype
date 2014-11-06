module.exports = function(config) {


    function getBrowsers(platform) {
        switch (platform) {
            case 'desktop':
                return [
                    'last 2 versions', 'ie 10', 'ff 24', 'opera 12.16'
                ];
            case 'touch-pad':
                return [
                    'android 4', 'ios 5'
                ];
            case 'touch-phone':
                return [
                    'android 4', 'ios 6', 'ie 10'
                ];
        }
    }

    config.setLanguages(['ru', 'uk', 'by', 'kz', 'en', 'tr']);

    config.node('desktop.bundles/direct', function(nodeConfig) {

        // уровни - декларации - зависимости - файлы
        nodeConfig.addTechs([
            [ require('enb/techs/levels'), { levels: getLevels(config) } ],
            [ require('enb/techs/file-provider'), { target: '?.bemdecl.js' } ],
            require('enb/techs/deps-old'),
            require('enb/techs/files')
        ]);

        nodeConfig.addTechs([
            require('enb-diverse-js/techs/browser-js'),
            [require('enb-modules/techs/prepend-modules'), { source: '?.browser.js', target: '?.ym.js' }]
        ]);


        // css + ie*.css
        nodeConfig.addTechs([
            [require('enb-stylus/techs/css-stylus'), { target : '?.noprefix.css' }],
            [
                require('enb-autoprefixer/techs/css-autoprefixer'),
                {
                    sourceTarget : '?.noprefix.css',
                    destTarget : '?.prefix.css',
                    browserSupport : getBrowsers('desktop')
                }
            ]
        ]);

        // сборка шаблонов bh
        nodeConfig.addTechs([
            [require('enb-bh/techs/bh-client'), { sourceSuffixes: 'bh.js', target: '?.bh.client.js', bhFile: 'bh/lib/bh.js' }],
            [require('enb-bh/techs/bh-server'), { sourceSuffixes: 'bh.js', target: '?.bh.js', bhFile: 'bh/lib/bh.js' }]

        ]);


        nodeConfig.addTargets([
            '?.bh.js',
            '?.bh.client.js',
            '?.js',
            '?.css'
        ]);
    });

    config.mode('development', function() {
        config.node('desktop.bundles/direct', function(nodeConfig) {
            nodeConfig.addTechs([
                [ require('enb-borschik/techs/borschik'), { freeze: true, sourceTarget: '?.prefix.css', destTarget: '?.css', minify: false } ],
                [ require('enb-borschik/techs/borschik'), { freeze: true, sourceTarget: '?.ym.js', destTarget: '?.js', minify: false } ]
            ]);
        });
    });

};

function getLevels(config) {

    return [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
//        { path: 'libs/adv-blocks', check: false },
//        { path: 'libs/bem-mvc/common.blocks', check: true },
//        'common.blocks',
        'desktop.blocks',
        'models'
    ]
        .map(function(levelPath) {
            return config.resolvePath(levelPath);
        });

}
