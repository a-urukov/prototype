/**
 * @module input
 */
modules.define(
    'b-phrase-edit',
    ['i-bem__dom'],
    function(provide, BEMDOM) {


        provide(BEMDOM.decl('b-phrase-edit', {

            onSetMod: {

                js: {

                    inited: function() {
                        this._popup = this.findBlockInside('popup');
                        this._input = this.findBlockInside('input');
                    }
                }

            },

            show: function(dom, id) {
                this._popup
                    .setAnchor(dom)
                    .setMod('visible');

                this.model = modelList['m-phrase'][id];

                this._input.setVal(this.model.get('text'));
            }

        }));

    });
