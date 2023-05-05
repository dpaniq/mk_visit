/* @refresh reload */
import { render } from 'solid-js/web';

import './css/index.scss';
import App from './App';
import { fullScreenChange } from './utils/fullscreen-api';

const root = document.getElementById('root');


document.removeEventListener("fullscreenchange", fullScreenChange)
document.addEventListener("fullscreenchange", fullScreenChange)

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => <App />, root!);
