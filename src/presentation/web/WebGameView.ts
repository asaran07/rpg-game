import type { GameView } from '../../application/ports/GameView';
import type { GameState } from '../../domain/models/GameState';

export class WebGameView implements GameView {
  public constructor(private readonly root: HTMLElement) {}

  public render(state: GameState): void {
    this.root.replaceChildren();

    const game = document.createElement('main');
    game.className = 'game';

    const title = document.createElement('h1');
    title.textContent = 'Adventure RPG';

    const player = document.createElement('section');
    player.className = 'panel';

    const playerName = document.createElement('h2');
    playerName.textContent = state.player.name;

    const level = document.createElement('p');
    level.textContent = `Level ${state.player.level}`;

    const health = document.createElement('p');
    health.textContent = `Health: ${state.player.health} / ${state.player.maxhealth}`;

    const scene = document.createElement('p');
    scene.textContent = `Current scene: ${state.currentSceneID}`;

    player.append(playerName, level, health, scene);
    game.append(title, player);

    this.root.append(game);
  }
}
