const { forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db'),
    item: forwardTo('db'), // if no custom logic, just forward it to Prisma
    // async items(parent, args, ctx, info) {
    //     const allThings = await ctx.prisma.items(); // or ctx.db.query.items()
    //     console.log('allThings', allThings);
    //     return allThings;
    // },

    // if uncommented, takes precedence over item: ^^^
    async item(parent, args, ctx, info) {
        console.log('args.where', args.where)
        // const oneItem = await ctx.prisma.item(args.where); // notice the difference in arguments
        const oneItem = await ctx.db.query.item({where: args.where});

        console.log('oneItem', oneItem);
        return oneItem;
    },
};

module.exports = Query;
