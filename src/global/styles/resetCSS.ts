import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${({ theme }) => theme.colors.shape};
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: ${({ theme }) => theme.fonts.family.title}, serif;
	}

	p, textarea, select, input, button, span {
		font-family: ${({ theme }) => theme.fonts.family.text}, sans-serif;
	}

	ul {
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		cursor: not-allowed;
		opacity: 0.6;
	}
`;
