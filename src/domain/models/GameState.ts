export interface PlayerState {
  readonly name: string;
  readonly level: number;
  readonly health: number;
  readonly maxhealth: number;
}

export interface GameState {
  readonly player: PlayerState;
  readonly currentSceneID: string;
}

export function createInitialGameState(): GameState {
  return {
    player: {
      name: 'Traveler',
      level: 1,
      health: 10,
      maxhealth: 10,
    },
    currentSceneID: 'intro',
  };
}
