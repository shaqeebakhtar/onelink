'use client';

import { getBaseURL } from '@/lib/utils';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: `${getBaseURL()}/api/graphql`,
  cache: new InMemoryCache(),
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
