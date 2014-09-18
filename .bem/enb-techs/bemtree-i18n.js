var Vow = require('vow'),
    vowFs = require('vow-fs');

module.exports = require('enb/lib/build-flow').create()
    .name('bemtree-i18n')
    .target('target', '?.all.bemtree.js')
    .useSourceListFilenames('langTargets', [])
    .useSourceText('bemhtmlTarget', '?.bemhtml.js')
    .useSourceText('bemtreeTarget', '?.bemtree.js')
    .builder(function(langFilenames, bemhtml, bemtree) {
        return Vow.all(
            langFilenames.map(function(filename) {
                return vowFs.read(filename);
            })
        ).then(function(langResults) {
            return [bemhtml, bemtree].concat(langResults).join('\n');
        });
    })
    .createTech();
