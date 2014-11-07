window.module = {};
window.models = {};
window.modelList = {};

modules.define(

    'i-model',
    ['i-bem__dom'],
    function(provide, BEMDOM) {


        provide(BEMDOM.decl('i-model', {

            onSetMod: {
                js: {
                    inited: function() {
                        var _this = this;

                        this.elem('model').each(function(i, el) {
                            var elem = $(el),
                                modelName = elem.data('model-name'),
                                modelId = elem.data('model-id'),
                                data = elem.data('model');

                            _this.createModel({ name: modelName, id: modelId }, data );
                        });
                    }
                }
            },

            hasModel: function(modelName, modelId) {
                if(!modelList[modelName]) {
                    modelList[modelName] = {};

                    return;
                }

                if(modelId && modelList[modelName][modelId]) return true;
            },

            createModel: function(model, data) {
                var modelName = model.name,
                    modelId = model.id;

                if(modelName && !this.hasModel(modelName, modelId))
                    modelList[modelName][modelId] = new (models[modelName])(data)
            },

            get: function(name, id) {
                if(!modelList[name]) return;
                return modelList[name][id];
            }

        }));
    });
