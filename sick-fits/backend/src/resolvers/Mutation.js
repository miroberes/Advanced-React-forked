const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    async createNewThingGqlYogaMutationName(parent, args, ctx, info) {
        console.log('createNewThing args.inputGqlYoga', args.inputGqlYoga);
        const newThing = await ctx.prisma.createItem(args.inputGqlYoga);
        // const newThing = await ctx.db.mutation.createItem({ data: args.gqlYogaInput });
        console.log('newThing', newThing);
        return newThing;
    },
    async updateThing(parent, args, ctx, info) {
        console.log('here in updateThing resolver, args', args);
        const updatedThing = await ctx.prisma.updateItem({ data: args.input, where: args.id });
        return updatedThing;
    },
    async signup(parent, { input }, ctx, info) {
        console.log('input mut', { ...input });
        input.email = input.email.toLowerCase();
        const password = await bcrypt.hash(input.password, 10);
        const user = await ctx.prisma.createUser({
            ...input,
            password,
            permissions: { set: ['USER'] },
        });
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365,
        });
        return user;
    },
};

module.exports = Mutation;
