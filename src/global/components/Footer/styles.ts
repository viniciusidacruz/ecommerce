import styled from 'styled-components';

export const Wrapper = styled.footer`
	width: 100%;
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.brand};

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: ${({ theme }) => theme.colors.white};

		p {
			margin: 1rem 0;
		}
	}
`;

export const ListIcons = styled.div`
	display: flex;
	gap: 0.875rem;
`;

export const WrapperCopy = styled.div`
	display: flex;
	align-items: center;
	height: 2rem;
	background-color: ${({ theme }) => theme.colors.secondary};

	p {
		color: ${({ theme }) => theme.colors.white};
	}
`;
