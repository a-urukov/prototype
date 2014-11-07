/**
 * @module input
 */
modules.define(
    'b-phrase',
    ['i-bem__dom'],
    function(provide, BEMDOM) {


        provide(BEMDOM.decl('b-phrase', {

            onSetMod: {

                js: {

                    inited: function() {
                        this.findBlockOn(this.elem('edit'), 'link').on('click', function() {
                            this.emit('edit', { id: this.params.id });
                        }, this);

                    }
                }

            }

        }));

    });
