import { render } from '@testing-library/react';
import { Form } from './index';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Form', () => {
  it('renders form fields', () => {
    const { getByLabelText } = render(<Form />);
    expect(getByLabelText('Date')).toBeInTheDocument();
    expect(getByLabelText('Time')).toBeInTheDocument();
    expect(getByLabelText('Number of guests')).toBeInTheDocument();
    expect(getByLabelText('Occasion')).toBeInTheDocument();
  });
});