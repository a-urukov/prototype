module.exports = function(bh) {
    bh.match('p-morda', function(ctx) {

        ctx.content([
            {
                elem: 'header',
                field: 'title'
            },
            {
                elem: 'content',
                field: 'content'
            },
            {
                elem: 'test',
                content: 'Content still alive'
            },
            {
                block: 'inside',
                model: ctx.ctx.model.inside,
                field: 'inside'
            }
        ]);

    });
};
