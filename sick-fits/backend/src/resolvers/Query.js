const { forwardTo } = require('prisma-binding');

const Query = {
    // items: forwardTo('db'),
    async getAllThings(parent, args, ctx, info) {
        const allThings = await ctx.prisma.items(); // or ctx.db.query.items()
        console.log('allThings', allThings);
        return allThings;
    },
};

module.exports = Query;
