import { Container } from '../../styles/resetCSS';
import { Drawer } from '../Drawer';
import { Logo } from '../Logo';
import * as Styles from './styles';

export function Header() {
	return (
		<Styles.Wrapper>
			<Container>
				<Logo />

				<button>Entrar</button>

				<Drawer />
			</Container>
		</Styles.Wrapper>
	);
}
