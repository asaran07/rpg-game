import { describe, expect, it } from 'vitest';

import type { GameState } from '../domain/models/GameState';
import { Game } from './Game';
import type { GameView } from './ports/GameView';

class FakeGameView implements GameView {
  public renderedState: GameState | undefined;

  public render(state: GameState): void {
    this.renderedState = state;
  }
}

describe('Game', () => {
  it('renders the initial game state when started', () => {
    const view = new FakeGameView();
    const game = new Game(view);

    game.start();

    expect(view.renderedState).toEqual(game.getState());
    expect(view.renderedState?.player.level).toBe(1);
  });
});
