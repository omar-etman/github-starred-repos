import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Repo from '../components/Repo'

test('renders repo info', () => {
  render(<Repo />);
  const info =  screen.getByLabelText('Repo info');
  expect(info).toBeInTheDocument();
});

test('renders repo avatar', () => {
    render(<Repo />);
    const avatar =  screen.getByLabelText('Repo avatar');
    expect(avatar).toBeInTheDocument();
  });