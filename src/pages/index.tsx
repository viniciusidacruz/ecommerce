import Head from 'next/head';
import { Fragment } from 'react';
import { Heading } from '../global/components';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>First Page</title>
			</Head>
			<main>
				<Heading title="Hello World" level={1} color="brand" fontSize="xlg" />
			</main>
		</Fragment>
	);
}
