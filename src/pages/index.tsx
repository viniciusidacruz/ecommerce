import Head from 'next/head';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>First Page</title>
      </Head>
      <main>
        <h1>Hello World</h1>
      </main>
    </Fragment>
  );
}
