import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../components/App'

test('renders header title', () => {
  render(<App />);
  const headerElement = screen.getByText('Github Starred Repos');
  expect(headerElement).toBeInTheDocument();
});
