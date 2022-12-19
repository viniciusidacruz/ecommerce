import Link from 'next/link';
import styled from 'styled-components';

export const Redirect = styled(Link)`
	display: flex;
	align-items: center;
`;

export const Title = styled.strong`
	color: ${({ theme }) => theme.colors.white};
	margin-left: 1.125rem;
	font-family: ${({ theme }) => theme.fonts.family.text};

	&::first-letter {
		font-size: 2rem;
	}
`;
