import { Wrapper } from './styles';
import { IContentProps } from './types';

export function Heading(props: IContentProps) {
	return <Wrapper {...props}>{props.title}</Wrapper>;
}
