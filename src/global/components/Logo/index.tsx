import Image from 'next/image';

import sourceImage from '../../assets/fruits.svg';
import * as Styles from './styles';

export function Logo() {
	return (
		<Styles.Redirect href="/">
			<Image
				src={sourceImage}
				width={50}
				alt="Frutas aleatórias, como: Banana, Maçã, Perâ, Mexirica e Cereja"
			/>

			<Styles.Title>Ecommerce</Styles.Title>
		</Styles.Redirect>
	);
}
