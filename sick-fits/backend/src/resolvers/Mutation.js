const Mutation = {
    async createNewThingBasic(parent, args, ctx, info) {
        console.log('createNewThingBasic args', args);
        const newThing = await ctx.db.mutation.createItem({
            data: args,
        });

        // const newThing = await ctx.prisma.createItem(args);
        console.log('newThing', newThing);
        return newThing;
    },
    async createNewThing(parent, args, ctx, info) {
        console.log('createNewThing args.input', args.input);
        const newThing = await ctx.prisma.createItem(args.input);
        // const newThing = await ctx.db.mutation.createItem({ data: args.input });
        console.log('newThing', newThing);
        return newThing;
    },
    async updateThing(parent, args, ctx, info) {
        console.log('here in updateThing resolver, args', args);
        const updatedThing = await ctx.prisma.updateItem({ data: args.input, where: args.id });
        return updatedThing;
    },
};

module.exports = Mutation;
