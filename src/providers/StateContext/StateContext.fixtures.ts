import {
  Board,
  EndEvent,
  EventKind,
  GameState,
  HitEvent,
  LogEntry,
  MissEvent,
  Ship,
  ShipTemplate,
  ShipsMap,
  SinkEvent,
  StartEvent,
} from './StateContext.types';

export const SHIP_ONE_TEMPLATE: ShipTemplate = { name: 'SHIP_ONE', hits: 0, size: 4 };

export const SHIP_ONE: Ship = { ...SHIP_ONE_TEMPLATE, id: 1 };

export const SHIP_TWO_TEMPLATE: ShipTemplate = { name: 'SHIP_TWO', hits: 2, size: 4 };

export const SHIP_TWO: Ship = { ...SHIP_TWO_TEMPLATE, id: 2 };

export const SHIP_THREE_TEMPLATE: ShipTemplate = { name: 'SHIP_THREE', hits: 4, size: 4 };

export const SHIP_THREE: Ship = { ...SHIP_THREE_TEMPLATE, id: 3 };

export const SHIP_FOUR_TEMPLATE: ShipTemplate = { name: 'SHIP_FOUR', hits: 0, size: 2 };

export const SHIP_FOUR: Ship = { ...SHIP_FOUR_TEMPLATE, id: 4 };

export const SHIP_FIVE_TEMPLATE: ShipTemplate = { name: 'SHIP_FIVE', hits: 0, size: 3 };

export const SHIP_FIVE: Ship = { ...SHIP_FIVE_TEMPLATE, id: 5 };

export const SHIP_SIX_TEMPLATE: ShipTemplate = { name: 'SHIP_SIX', hits: 0, size: 4 };

export const SHIP_SIX: Ship = { ...SHIP_SIX_TEMPLATE, id: 6 };

export const SHIP_SEVEN_TEMPLATE: ShipTemplate = { name: 'SHIP_SEVEN', hits: 0, size: 1 };

export const SHIP_SEVEN: Ship = { ...SHIP_SEVEN_TEMPLATE, id: 7 };

export const SHIP_MAP_ONE: ShipsMap = {
  1: SHIP_ONE,
};

export const SHIP_MAP_ONE_TWO: ShipsMap = {
  1: SHIP_ONE,
  2: SHIP_TWO,
};

export const SHIP_MAP_ONE_TWO_THREE: ShipsMap = {
  1: SHIP_ONE,
  2: SHIP_TWO,
  3: SHIP_THREE,
};

export const BOARD_SIZE_2: Board = [
  [0, 0],
  [0, 0],
];
export const BOARD_SIZE_5: Board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

export const BOARD_SIZE_10: Board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const STATE_BOARD_10: Partial<GameState> = {
  board: BOARD_SIZE_10,
  attacksMap: {},
  shipsMap: {},
}

export const STATE_BOARD_10_W_SHIPS: Partial<GameState> = {
  ...STATE_BOARD_10,
  board: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 5, 5, 5, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  shipsMap: {
    1: SHIP_ONE,
    5: SHIP_FIVE
  }
}

export const STATE_BOARD_10_W_SHIPS_W_MISS : Partial<GameState>= {
  ...STATE_BOARD_10_W_SHIPS,
  attacksMap: {
    '00': false
  }
}

export const STATE_BOARD_10_W_SHIPS_W_HIT : Partial<GameState>= {
  ...STATE_BOARD_10_W_SHIPS,
  attacksMap: {
    '11': true
  }
}

export const END_LOG_ENTRY: LogEntry<EndEvent> = {
  ts: 0,
  event: {
    type: EventKind.End,
    stats: {
      attacks: 0,
      hitRatio: 0,
      hits: 0,
      misses: 0,
      score: 0,
      sunk: 0,
    },
  },
};

export const MISS_LOG_ENTRY: LogEntry<MissEvent> = {
  ts: 0,
  event: {
    type: EventKind.Miss,
    x: 0,
    y: 0,
  },
};

export const HIT_LOG_ENTRY: LogEntry<HitEvent> = {
  ts: 0,
  event: {
    type: EventKind.Hit,
    x: 0,
    y: 0,
    targetId: 1,
  },
};

export const SINK_LOG_ENTRY: LogEntry<SinkEvent> = {
  ts: 0,
  event: {
    type: EventKind.Sink,
    x: 0,
    y: 0,
    targetId: 1,
  },
};

export const START_LOG_ENTRY: LogEntry<StartEvent> = {
  ts: 0,
  event: {
    type: EventKind.Start,
  },
};
