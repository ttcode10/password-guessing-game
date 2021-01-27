import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';

describe('User enter the main page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('should correctly render input', async () => {
    const input = await screen.getAllByTestId('input');
    expect(input).toBeTruthy();
  });

  test('should correctly render clear button', async () => {
    const clearButton = await screen.getByRole('button', {
      name: /Clear/i,
    });
    expect(clearButton).toBeTruthy();
  });

  test('should correctly render submit button', async () => {
    const submitButton = await screen.getByRole('button', {
      name: /Submit/i,
    });
    expect(submitButton).toBeTruthy();
  });

  test('should correctly render password hint', async () => {
    const passwordHint = await screen.getByText(/Hint/i);
    expect(passwordHint).toBeTruthy();
  });
});
