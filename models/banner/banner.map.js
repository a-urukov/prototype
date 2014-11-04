module.exports = {
    id: 'bid',
    title: function(ctx) {

        return ctx.name + ' (' + ctx.bid + ')';
    },
    phrases: {
        type: 'collection',
        model: 'phrase',
        ctx: 'phrases'
    }
};
