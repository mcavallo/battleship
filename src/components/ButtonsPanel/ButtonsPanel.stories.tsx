import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { MockedStateContextProvider } from '@/providers/StateContext/StateContext.mocks';

import { ButtonsPanel } from './ButtonsPanel';

type Story = StoryObj<typeof ButtonsPanel>;

const meta: Meta<typeof ButtonsPanel> = {
  component: ButtonsPanel,
  decorators: [
    (Story, { parameters }) => (
      <MockedStateContextProvider
        value={{
          state: parameters.state,
        }}
      >
        <Story />
      </MockedStateContextProvider>
    ),
  ],
};

const commonArgs = {
  onGiveUp: () => action('onGiveUp'),
  onRestart: action('onRestart'),
  onToggleDebug: () => action('onToggleDebug'),
};

export const GameOngoing: Story = {
  args: commonArgs,
  parameters: {
    state: {
      hasGameEnded: false,
    },
  },
};

export const GameEnded: Story = {
  args: commonArgs,
  parameters: {
    state: {
      hasGameEnded: true,
    },
  },
};

export default meta;
