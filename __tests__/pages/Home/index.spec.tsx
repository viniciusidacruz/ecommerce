import { render } from '@testing-library/react';
import Home from '../../../src/pages';

describe('Home', () => {
	it('Should render title', () => {
		const { getByText } = render(<Home />);

		expect(getByText('Hello World')).toBeInTheDocument();
	});
});
