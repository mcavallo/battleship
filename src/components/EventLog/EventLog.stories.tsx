import type { Meta, StoryObj } from '@storybook/react';

import {
  END_LOG_ENTRY,
  HIT_LOG_ENTRY,
  MISS_LOG_ENTRY,
  SHIP_ONE,
  SINK_LOG_ENTRY, START_LOG_ENTRY,
} from '@/providers/StateContext/StateContext.fixtures';
import { MockedStateContextProvider } from '@/providers/StateContext/StateContext.mocks';

import { EventLog } from './EventLog';

type Story = StoryObj<typeof EventLog>;

const meta: Meta<typeof EventLog> = {
  component: EventLog,
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

export const EndLogEntry: Story = {
  parameters: {
    state: {
      log: [END_LOG_ENTRY]
    },
  },
};

export const HitLogEntry: Story = {
  parameters: {
    state: {
      log: [HIT_LOG_ENTRY],
      shipsMap: {
        1: SHIP_ONE,
      }
    },
  },
};

export const MissLogEntry: Story = {
  parameters: {
    state: {
      log: [MISS_LOG_ENTRY]
    },
  },
};

export const SinkLogEntry: Story = {
  parameters: {
    state: {
      log: [SINK_LOG_ENTRY],
      shipsMap: {
        1: SHIP_ONE,
      }
    },
  },
};

export const StartLogEntry: Story = {
  parameters: {
    state: {
      log: [START_LOG_ENTRY]
    },
  },
};

export default meta;
