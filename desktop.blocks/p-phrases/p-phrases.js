/**
 * @module input
 */

modules.define(
    'p-phrases',
    ['i-bem__dom'],
    function(provide, BEMDOM) {


provide(BEMDOM.decl('p-phrases', {

    onSetMod: {

        'js': function() {
            this.findBlockOn('show-all', 'button').on('click', function(e) {
                e.target.setMod('disabled', 'yes');
                this.showAll();
            }, this);
        }

    },

    showAll: function() {
        window.history.pushState(null, null, '/phrases/all');
    }

}));

});
