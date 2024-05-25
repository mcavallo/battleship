import { render, screen, within } from '@testing-library/react';

import { NumberHeadersRow } from './NumberHeadersRow';

describe(`NumberHeadersRow`, () => {
  describe(`properties`, () => {
    it(`has the right properties`, () => {
      render(<NumberHeadersRow size={5} />);

      const container = screen.getByRole('columnheader');

      expect(Object.values(container.classList)).toEqual(['header-row']);
    });
  });

  describe(`content`, () => {
    it(`renders the header cells`, () => {
      render(<NumberHeadersRow size={3} />);

      const container = screen.getByRole('columnheader');

      const cells = within(container).getAllByRole('cell');

      expect(cells.length).toEqual(3);
      expect(cells[0].textContent).toEqual('1');
      expect(cells[1].textContent).toEqual('2');
      expect(cells[2].textContent).toEqual('3');
    });
  });
});
