import styled, { css } from 'styled-components';
import { IContentProps } from './types';

export const Wrapper = styled('h1').attrs<IContentProps>(({ level }) => ({
	as: `h${level}`,
}))<IContentProps>`
	${({
		color = 'text',
		fontSize = 'rg',
		fontWeight = 'light',
		lineHeight,
		theme,
	}) => css`
		font-size: ${theme.fonts?.size?.[fontSize]}rem;
		font-weight: ${theme.fonts?.weight?.[fontWeight]};
		line-height: ${lineHeight};
		color: ${theme.colors?.[color]};
	`}
`;
