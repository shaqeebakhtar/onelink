import { linkQuery, linkTypes, linkMutation } from './routes/link';

export const typeDefs = `
    ${linkTypes}
`;

export const resolvers = {
  Query: {
    ...linkQuery,
  },

  Mutation: {
    ...linkMutation,
  },
};
