import {
  createInitialGameState,
  type GameState,
} from '../domain/models/GameState';
import type { GameView } from './ports/GameView';

export class Game {
  private state: GameState;

  public constructor(
    private readonly view: GameView,
    initialState: GameState = createInitialGameState(),
  ) {
    this.state = initialState;
  }

  public start(): void {
    this.view.render(this.state);
  }

  public getState(): GameState {
    return this.state;
  }
}
