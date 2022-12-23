import { useRouter } from 'next/router';

import { Button } from '../Button';
import { Drawer } from '../Drawer';
import { Logo } from '../Logo';

import { Container } from '../../styles/resetCSS';
import * as Styles from './styles';

export function Header() {
	const router = useRouter();

	return (
		<Styles.Wrapper>
			<Container>
				<Logo />

				<Button
					title="Entrar"
					variant="secondary"
					onClick={() => router.push('/entrar')}
				/>

				<Drawer />
			</Container>
		</Styles.Wrapper>
	);
}
