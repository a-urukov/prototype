module.exports = function(bh) {
    bh.match('p-morda', function(ctx) {

        ctx.model = {
            title: 'My header',
            content: 'My content',
            inside: {
                inside: 'inside model'
            }
        };

        ctx.content = [
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
                model: ctx.model.inside,
                field: 'inside'
            }
        ];

        return ctx;

    })
};
