export enum Direction {
  Horizontal = 0,
  Vertical = 1,
}

export type Coords = {
  x: number;
  y: number;
};

export type Board = number[][];

export type ShipsMap = Record<number, Ship>;

export type ShipTemplate = {
  name: string;
  size: number;
  hits: number;
};

export type Ship = ShipTemplate & {
  id: number;
};

export type Placement = Coords & {
  direction: Direction;
  size: number;
};

export type GameScore = {
  current: number;
  win: number;
};

export type GameStats = {
  attacks: number;
  hitRatio: number;
  hits: number;
  misses: number;
  score: number;
  sunk: number;
};

export enum EventKind {
  End = 'End',
  Hit = 'Hit',
  Miss = 'Miss',
  Sink = 'Sink',
  Start = 'Start',
}

export type EndEvent = {
  stats: GameStats;
  type: EventKind.End;
};

export type HitEvent = Coords & {
  targetId: number;
  type: EventKind.Hit;
};

export type MissEvent = Coords & {
  type: EventKind.Miss;
};

export type SinkEvent = Coords & {
  targetId: number;
  type: EventKind.Sink;
};

export type StartEvent = {
  type: EventKind.Start;
};

export type Event = EndEvent | HitEvent | MissEvent | SinkEvent | StartEvent;

export type LogEntry = {
  ts: number;
  event: Event;
};

export type GameState = {
  attacksMap: Record<string, boolean>;
  board: Board;
  hasGameEnded: boolean;
  hasGameStarted: boolean;
  isDebug: boolean;
  log: LogEntry[];
  shipsMap: ShipsMap;
  score: GameScore;
};

export enum GameActionKind {
  Attack = 'Attack',
  End = 'End',
  Introspection = 'Introspection', // Used only for testing
  Start = 'Start',
  ToggleDebug = 'ToggleDebug',
}

export interface AttackAction {
  type: GameActionKind.Attack;
  payload: {
    coords: Coords;
    ts: number;
  };
}

export interface EndAction {
  type: GameActionKind.End;
  payload: {
    ts: number;
  };
}

export interface IntrospectionAction {
  type: GameActionKind.Introspection;
}

export interface StartAction {
  type: GameActionKind.Start;
  payload: {
    ts: number;
  };
}

export interface ToggleDebugAction {
  type: GameActionKind.ToggleDebug;
}

export type GameAction =
  | AttackAction
  | EndAction
  | IntrospectionAction
  | StartAction
  | ToggleDebugAction;
