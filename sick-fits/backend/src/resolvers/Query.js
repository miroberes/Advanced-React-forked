const { forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db'),

    // item: forwardTo('db'), // if no custom logic, just forward it to Prisma
    // async items(parent, args, ctx, info) {
    //     const allThings = await ctx.prisma.items(); // or ctx.db.query.items()
    //     console.log('allThings', allThings);
    //     return allThings;
    // },

    // async item(parent, args, ctx, info) {
    //     console.log('args.input', args.input)
    //     // const oneItem = await ctx.prisma.item(args.input); // notice the difference in arguments
    //     const oneItem = await ctx.db.query.item({where: {id: args.input.id}});

    //     console.log('oneItem', oneItem);
    //     return oneItem;
    // },

    // forwarding to Prisma with the Prisma client prisma.$graphql(queryAsPlainString)
    async itemWithPrismaClient(parent, args, ctx, info) {
        console.log('args.queryx', args.queryx);
        // const oneItem = await ctx.prisma.item(args.where); // notice the difference in arguments
        const result = await ctx.prisma.$graphql(args.queryx);

        console.log('result', result.item);
        return result.item;
    },
};

module.exports = Query;
