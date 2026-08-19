import type { GameState } from '../../domain/models/GameState';

export interface GameView {
  render(state: GameState): void;
}
