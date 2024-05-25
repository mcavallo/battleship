import React from 'react';

import {
  MockedStateContextProvider,
  PartialStateContextProviderValue,
} from '@/providers/StateContext/StateContext.mocks';

export const withStateContextWrapper = (
  value?: PartialStateContextProviderValue,
): {
  wrapper: React.FC;
} => {
  return {
    wrapper: ({ children }: { children?: React.ReactNode }) => (
      <MockedStateContextProvider value={value}>{children}</MockedStateContextProvider>
    ),
  };
};
