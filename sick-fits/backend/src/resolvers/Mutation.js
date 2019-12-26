const Mutation = {
    async createNewThingBasic(parent, args, ctx, info) {
        const newThing = await ctx.prisma.createItem({
            ...args,
        });
        console.log('newThing', newThing);
        return newThing;
    },
    async createNewThing(parent, args, ctx, info) {
        const newThing = await ctx.prisma.createItem(args.input);
        console.log('newThing', newThing);
        return newThing;
    },
};

module.exports = Mutation;
