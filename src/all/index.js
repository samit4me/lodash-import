import _ from 'lodash';

import content from '../content';

const mountNode = document.getElementById('app');
const valid = _.isObject(mountNode) && _.isString(content);
if (valid) {
  mountNode.innerHTML = `${content} ALL`;
}
