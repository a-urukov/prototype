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

            BEMDOM.blocks['b-phrase'].on(this.domElem, 'edit', function(e, data) {
                this.findBlockInside('b-phrase-edit').show(e.target.domElem, data.id);
            }, this);
        }

    },

    showAll: function() {
        window.history.pushState(null, null, '/phrases/all');
        this.setMod(this.elem('loading'), 'show', 'yes');

        $.ajax('/phrases/all').success(function(data) {
            this.findElem('phrases').replaceWith(data);
            this.delMod(this.elem('loading'), 'show');
        }.bind(this));
    }

}));

});
