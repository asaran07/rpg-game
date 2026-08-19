import './style.css';

import { Game } from './application/Game';
import { WebGameView } from './presentation/web/WebGameView';

const root = document.querySelector<HTMLElement>('#app');

if (!root) {
  throw new Error('Application root element was not found.');
}

const view = new WebGameView(root);
const game = new Game(view);

game.start();
