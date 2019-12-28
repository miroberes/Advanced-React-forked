const { forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db'),
    item: forwardTo('db'),
    // async getAllThings(parent, args, ctx, info) {
    //     const allThings = await ctx.prisma.items(); // or ctx.db.query.items()
    //     console.log('allThings', allThings);
    //     return allThings;
    // },

    async item(parent, args, ctx, info) {
        const oneItem = await ctx.prisma.item(args); // or ctx.db.query.items()
        console.log('oneItem', oneItem);
        return oneItem;
    },
};

module.exports = Query;
