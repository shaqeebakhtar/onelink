'use client';
import { Button } from '@/components/ui/button';
import { gql, useQuery } from '@apollo/client';

const HELLO_WORLD = gql`
  query HelloQuery {
    hello
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(HELLO_WORLD);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1 className="text-5xl font-bold">{data.hello}</h1>
      <Button>Click me</Button>
    </div>
  );
}
