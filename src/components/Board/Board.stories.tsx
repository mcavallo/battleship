import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import {
  BOARD_SIZE_10,
  STATE_BOARD_10,
  STATE_BOARD_10_W_SHIPS, STATE_BOARD_10_W_SHIPS_W_HIT,
  STATE_BOARD_10_W_SHIPS_W_MISS,
} from '@/providers/StateContext/StateContext.fixtures';
import { MockedStateContextProvider } from '@/providers/StateContext/StateContext.mocks';

import { Board } from './Board';

type Story = StoryObj<typeof Board>;

const meta: Meta<typeof Board> = {
  component: Board,
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
  onAttack: () => action('onAttack'),
  onCellMouseOut: action('onCellMouseOut'),
  onCellMouseOver: () => action('onCellMouseOver'),
};

export const Default: Story = {
  args: commonArgs,
  parameters: {
    state: STATE_BOARD_10,
  },
};

export const DefaultWithShips: Story = {
  args: commonArgs,
  parameters: {
    state: STATE_BOARD_10_W_SHIPS,
  },
};

export const DefaultWithMiss: Story = {
  args: commonArgs,
  parameters: {
    state: {
      ...STATE_BOARD_10_W_SHIPS_W_MISS
    },
  },
};

export const DefaultWithHit: Story = {
  args: commonArgs,
  parameters: {
    state: {
      ...STATE_BOARD_10_W_SHIPS_W_HIT
    },
  },
};

export const Debug: Story = {
  args: commonArgs,
  parameters: {
    state: {
      board: BOARD_SIZE_10,
      isDebug: true,
    },
  },
};

export const DebugWithShips: Story = {
  args: commonArgs,
  parameters: {
    state: {
      ...STATE_BOARD_10_W_SHIPS,
      isDebug: true,
    },
  },
};

export const DebugWithMiss: Story = {
  args: commonArgs,
  parameters: {
    state: {
      ...STATE_BOARD_10_W_SHIPS_W_MISS,
      isDebug: true,
    },
  },
};

export const DebugWithHit: Story = {
  args: commonArgs,
  parameters: {
    state: {
      ...STATE_BOARD_10_W_SHIPS_W_HIT,
      isDebug: true,
    },
  },
};

export default meta;
