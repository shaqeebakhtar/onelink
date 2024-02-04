import { helloQuery, helloTypes } from './routes/hello';

export const typeDefs = `
    ${helloTypes}
`;

export const resolvers = {
  Query: {
    ...helloQuery,
  },
};
