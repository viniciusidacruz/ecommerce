import styled from 'styled-components';

export const Wrapper = styled.header`
	height: 4rem;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.brand};
	position: relative;

	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > span {
			display: none;
		}

		@media (max-width: 720px) {
			& > span {
				display: block;
			}

			button {
				display: none;
			}
		}
	}
`;
