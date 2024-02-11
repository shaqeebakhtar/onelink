import { type Link } from '@/db/schema';

export const linkTypes = `#graphql
    type Query {
        getAll: [Link]
    }
`;
