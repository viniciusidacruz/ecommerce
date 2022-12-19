import { ButtonHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';

export interface ContentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	loading?: boolean;
	variant: 'brand' | 'primary' | 'secondary' | 'inverted';
}

export type TypesVariants = Pick<ContentProps, 'variant'>;

export interface ParamVariant extends TypesVariants {
	theme: DefaultTheme;
}
