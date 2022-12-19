import { Container } from '../../styles/resetCSS';
import { Button } from '../Button';
import { Drawer } from '../Drawer';
import { Logo } from '../Logo';
import * as Styles from './styles';

export function Header() {
	return (
		<Styles.Wrapper>
			<Container>
				<Logo />

				<Button title="Entrar" variant="secondary" />

				<Drawer />
			</Container>
		</Styles.Wrapper>
	);
}
