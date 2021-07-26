import '../css/style.scss';

import metListen from './frontend/initializer.js';
import tasks from './backend/tasks.js';

if (!localStorage.getItem('index')) {
  for (let i = 0; i < tasks.length; i += 1) {
    metListen.updateStorage(tasks[i]);
  }
  metListen.createDOM();
} else {
  metListen.createDOM();
}
