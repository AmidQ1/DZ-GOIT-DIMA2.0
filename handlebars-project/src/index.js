import { users } from './data.js';
import template from './index.html';

const renderedHTML = template({ users });
document.body.innerHTML = renderedHTML;