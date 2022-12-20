import Head from 'next/head';
import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../global/hooks/redux';
import { incrementByAmount, selectCount } from '../global/store/counterSlice';

export default function Home() {
	const dispatch = useAppDispatch();
	const count = useAppSelector(selectCount);

	console.log('Count: ', count);

	return (
		<Fragment>
			<Head>
				<title>First Page</title>
			</Head>
			<main>
				<h1>Hello World</h1>

				<button
					type="button"
					onClick={() => dispatch(incrementByAmount(count + 1))}
				>
					Incrementar
				</button>
			</main>
		</Fragment>
	);
}
