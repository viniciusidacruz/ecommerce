import { Wrapper } from './styles';
import { ContentProps } from './types';

export function Button({ title, loading, variant, ...rest }: ContentProps) {
	return (
		<Wrapper variant={variant} {...rest}>
			{loading ? 'Carregando...' : title}
		</Wrapper>
	);
}
