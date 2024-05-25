import { render, screen } from '@testing-library/react';

import { LetterHeaderCell } from '@/components/LetterHeaderCell/LetterHeaderCell';

describe(`LetterHeaderCell`, () => {
  describe(`properties`, () => {
    it(`has the right properties`, () => {
      render(<LetterHeaderCell idx={0} />);

      const container = screen.getByRole('rowheader');

      expect(Object.values(container.classList)).toEqual(['header-cell']);
    });
  });

  describe(`content`, () => {
    it(`renders the index number as a letter`, () => {
      const { rerender } = render(<LetterHeaderCell idx={0} />);

      const container = screen.getByRole('rowheader');

      expect(container.textContent).toEqual('A');

      rerender(<LetterHeaderCell idx={1} />);
      expect(container.textContent).toEqual('B');

      rerender(<LetterHeaderCell idx={2} />);
      expect(container.textContent).toEqual('C');
    });
  });
});
