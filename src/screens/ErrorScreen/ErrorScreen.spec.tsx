import { cleanup, render, screen } from '@testing-library/react';

import { ErrorScreen } from './ErrorScreen';

afterEach(cleanup);

describe('ErrorScreen', () => {
  describe(`when it receives an error with a message`, () => {
    it(`renders the message`, () => {
      render(<ErrorScreen error={new Error('some error')} />);

      const errorLabel = screen.getByRole('error');
      expect(errorLabel.textContent).toBe('some error');
    });
  });

  describe(`when it receives an error without a message`, () => {
    it(`renders nothing`, () => {
      render(<ErrorScreen error={new Error()} />);

      const errorLabel = screen.queryByRole('error');
      expect(errorLabel).toBeNull();
    });
  });
});
