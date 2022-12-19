import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import styled, { css } from 'styled-components';
import { ActiveProps } from './types';

export const Background = styled.span<ActiveProps>`
	${({ active }) =>
		active &&
		css`
			position: fixed;
			background: rgba(0, 0, 0, 0.8);
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 99;
		`}
`;

export const Wrapper = styled.div<ActiveProps>`
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.text};
	position: fixed;
	right: ${({ active }) => (active ? 0 : '-100%')};
	top: 0;
	width: 80%;
	height: 100%;
	transition: 0.5s;
	z-index: 9999;
`;

export const Icons = styled.div`
	display: none;

	@media (max-width: 720px) {
		display: block;
		position: absolute;
		right: 1rem;
		cursor: pointer;
		font-size: 2rem;
	}
`;

export const OpenIcon = styled(RxHamburgerMenu)`
	color: ${({ theme }) => theme.colors.white};
`;

export const CloseIcon = styled(IoClose)`
	font-size: 2rem;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.text};
`;

export const HeadingDrawer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled.h3`
	margin-bottom: 0.875rem;
	color: ${({ theme }) => theme.colors.text};

	&::after {
		content: '';
		display: block;
		width: 100px;
		height: 3px;
		background-color: ${({ theme }) => theme.colors.text};
	}
`;

export const List = styled.ul`
	list-style: none;
	margin-top: 1rem;
`;
