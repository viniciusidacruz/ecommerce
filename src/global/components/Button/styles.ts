import styled from 'styled-components';
import { ParamVariant, TypesVariants } from './types';

const typeVariant = ({ theme, variant }: ParamVariant) => {
	if (variant === 'brand') {
		return {
			backgroundColor: theme.colors.brand,
			colorText: theme.colors.white,
		};
	}

	if (variant === 'inverted') {
		return {
			backgroundColor: theme.colors.text,
			colorText: theme.colors.white,
		};
	}

	if (variant === 'primary') {
		return {
			backgroundColor: theme.colors.primary,
			colorText: theme.colors.text,
		};
	}

	if (variant === 'secondary') {
		return {
			backgroundColor: theme.colors.secondary,
			colorText: theme.colors.white,
		};
	}

	return null;
};

export const Wrapper = styled.button<TypesVariants>`
	height: 3rem;
	max-width: 220px;
	width: 100%;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.5rem;
	border: none;
	background-color: ${({ theme, variant }) =>
		typeVariant({ theme, variant })?.backgroundColor};
	color: ${({ theme, variant }) => typeVariant({ theme, variant })?.colorText};
	transition: filter 0.2s;

	&:hover {
		filter: brightness(1.4);
	}
`;
