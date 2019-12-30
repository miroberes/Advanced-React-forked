const Mutation = {
    async createNewThingBasic(parent, args, ctx, info) {
        console.log(args)
        const newThing = await ctx.prisma.createItem(args);
        console.log('newThing', newThing);
        return newThing;
    },
    async createNewThing(parent, args, ctx, info) {
        console.log(args)
        // const newThing = await ctx.prisma.createItem(args.blimblam);
        const newThing = await ctx.db.mutation.createItem({data: args.blimblam});
        console.log('newThing', newThing);
        return newThing;
    },
    async updateThing(parent, args, ctx, info) {
        console.log('here in updateThing resolver, args', args)
        const updatedThing = await ctx.prisma.updateItem({data: args.input, where: args.id});
        return updatedThing;
    }

};

module.exports = Mutation;
