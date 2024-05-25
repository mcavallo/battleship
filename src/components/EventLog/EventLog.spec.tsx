import { cleanup, render, screen } from '@testing-library/react';

import {
  END_LOG_ENTRY,
  HIT_LOG_ENTRY,
  MISS_LOG_ENTRY,
  SHIP_ONE,
  SINK_LOG_ENTRY,
  START_LOG_ENTRY,
} from '@/providers/StateContext/StateContext.fixtures';
import { withStateContextWrapper } from '@/utils/test';

import { EndEntry } from './entries/EndEntry';
import { HitEntry } from './entries/HitEntry';
import { MissEntry } from './entries/MissEntry';
import { SinkEntry } from './entries/SinkEntry';
import { StartEntry } from './entries/StartEntry';
import { EventLog } from './EventLog';

jest.mock('./entries/EndEntry');
jest.mock('./entries/HitEntry');
jest.mock('./entries/MissEntry');
jest.mock('./entries/SinkEntry');
jest.mock('./entries/StartEntry');

afterEach(() => {
  cleanup();
});

describe(`EventLog`, () => {
  describe(`properties`, () => {
    it(`has the right properties`, () => {
      render(
        <EventLog />,
        withStateContextWrapper({
          state: {
            log: [START_LOG_ENTRY],
          },
        }),
      );

      const container = screen.getByRole('feed');

      expect(Object.values(container.classList)).toEqual(['event-log']);
    });
  });

  describe(`conditions`, () => {
    it(`renders nothing unless there are log events`, () => {
      render(<EventLog />, withStateContextWrapper());

      expect(screen.queryByRole('feed')).not.toBeInTheDocument();
    });
  });

  describe(`children`, () => {
    it(`renders end log entries`, () => {
      const props = {
        entry: END_LOG_ENTRY,
      };

      render(
        <EventLog />,
        withStateContextWrapper({
          state: {
            log: [END_LOG_ENTRY],
          },
        }),
      );

      screen.getByRole('feed');
      expect(EndEntry).toHaveBeenCalledWith(props, expect.anything());
    });

    it(`renders hit log entries`, () => {
      const shipsMap = {
        1: SHIP_ONE,
      };

      const props = {
        entry: HIT_LOG_ENTRY,
        shipsMap,
      };

      render(
        <EventLog />,
        withStateContextWrapper({
          state: {
            log: [HIT_LOG_ENTRY],
            shipsMap,
          },
        }),
      );

      screen.getByRole('feed');
      expect(HitEntry).toHaveBeenCalledWith(props, expect.anything());
    });

    it(`renders miss log entries`, () => {
      const props = {
        entry: MISS_LOG_ENTRY,
      };

      render(
        <EventLog />,
        withStateContextWrapper({
          state: {
            log: [MISS_LOG_ENTRY],
          },
        }),
      );

      screen.getByRole('feed');
      expect(MissEntry).toHaveBeenCalledWith(props, expect.anything());
    });

    it(`renders sink log entries`, () => {
      const shipsMap = {
        1: SHIP_ONE,
      };

      const props = {
        entry: SINK_LOG_ENTRY,
        shipsMap,
      };

      render(
        <EventLog />,
        withStateContextWrapper({
          state: {
            log: [SINK_LOG_ENTRY],
            shipsMap,
          },
        }),
      );

      screen.getByRole('feed');
      expect(SinkEntry).toHaveBeenCalledWith(props, expect.anything());
    });

    it(`renders start log entries`, () => {
      render(<EventLog />, withStateContextWrapper({ state: { log: [START_LOG_ENTRY] } }));

      screen.getByRole('feed');
      expect(StartEntry).toHaveBeenCalledWith({}, expect.anything());
    });
  });
});
