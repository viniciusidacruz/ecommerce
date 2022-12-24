import { THEME_DEFAULT } from '../../styles/theme';

export interface IContentProps {
	title: string;
	level: 1 | 2 | 3 | 4 | 5 | 6;
	color?: keyof typeof THEME_DEFAULT.colors;
	fontFamily?: keyof typeof THEME_DEFAULT.fonts.family;
	fontSize?: keyof typeof THEME_DEFAULT.fonts.size;
	fontWeight?: keyof typeof THEME_DEFAULT.fonts.weight;
	lineHeight?: number | string;
}
