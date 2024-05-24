import { cleanup, render, screen } from '@testing-library/react';

import { useGameState } from '@/providers/StateContext';
import {
  END_LOG_ENTRY,
  HIT_LOG_ENTRY,
  MISS_LOG_ENTRY,
  SINK_LOG_ENTRY,
  START_LOG_ENTRY,
} from '@/providers/StateContext/StateContext.fixtures.ts';

import { EventLog } from './EventLog';

jest.mock('@/providers/StateContext', () => {
  return {
    useGameState: jest.fn().mockReturnValue({}),
  };
});

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  (useGameState as jest.Mock).mockReset();
});

describe(`EventLog`, () => {
  it(`renders nothing unless there are log events`, () => {
    (useGameState as jest.Mock).mockReturnValue({ state: { log: [] } });

    render(<EventLog />);

    expect(screen.queryByRole('feed')).not.toBeInTheDocument();
  });

  it(`renders end log entries`, () => {
    (useGameState as jest.Mock).mockReturnValue({
      state: {
        log: [END_LOG_ENTRY],
      },
    });

    render(<EventLog />);

    screen.getByRole('feed');
    screen.getByRole('log');
  });

  it(`renders miss log entries`, () => {
    (useGameState as jest.Mock).mockReturnValue({
      state: {
        log: [MISS_LOG_ENTRY],
      },
    });

    render(<EventLog />);

    screen.getByRole('feed');
    screen.getByRole('log');
  });

  it(`renders hit log entries`, () => {
    (useGameState as jest.Mock).mockReturnValue({
      state: {
        log: [HIT_LOG_ENTRY],
        shipsMap: {
          1: {
            name: 'Ship Name',
          },
        },
      },
    });

    render(<EventLog />);

    screen.getByRole('feed');
    screen.getByRole('log');
  });

  it(`renders sink log entries`, () => {
    (useGameState as jest.Mock).mockReturnValue({
      state: {
        log: [SINK_LOG_ENTRY],
        shipsMap: {
          1: {
            name: 'Ship Name',
          },
        },
      },
    });

    render(<EventLog />);

    screen.getByRole('feed');
    screen.getByRole('log');
  });

  it(`renders start log entries`, () => {
    (useGameState as jest.Mock).mockReturnValue({ state: { log: [START_LOG_ENTRY] } });

    render(<EventLog />);

    screen.getByRole('feed');
    screen.getByRole('log');
  });
});
