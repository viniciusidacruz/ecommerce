import { FaFacebook, FaGithub } from 'react-icons/fa';
import { THEME_DEFAULT } from '../../../styles/theme';

export const ICONS = [
	{
		id: 1,
		path: 'https://www.facebook.com/viniitalodacruz',
		icon: <FaFacebook color={THEME_DEFAULT.colors.white} size={32} />,
	},
	{
		id: 2,
		path: 'https://github.com/viniciusidacruz',
		icon: <FaGithub color={THEME_DEFAULT.colors.white} size={32} />,
	},
];
