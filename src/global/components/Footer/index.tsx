import Link from 'next/link';
import { Fragment } from 'react';

import { Container } from '../../styles/resetCSS';
import * as Styles from './styles';
import { ICONS } from './__mocks__/icons';

export function Footer() {
	return (
		<Fragment>
			<Styles.Wrapper>
				<Container>
					<span>Logo</span>
					<p>
						Desenvolvido por Vinicius Italo para aperfeiçoamento de técnologias
						da programação front-end
					</p>

					<Styles.ListIcons>
						{ICONS.map((icon) => (
							<Link key={icon.id} href={icon.path}>
								{icon.icon}
							</Link>
						))}
					</Styles.ListIcons>
				</Container>
			</Styles.Wrapper>
			<Styles.WrapperCopy>
				<Container>
					<p>Desenvolvido em 2022</p>
				</Container>
			</Styles.WrapperCopy>
		</Fragment>
	);
}
