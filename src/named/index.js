import { isObject, isString } from 'lodash';

import content from '../content';

const mountNode = document.getElementById('app');
const valid = isObject(mountNode) && isString(content);
if (valid) {
  mountNode.innerHTML = `${content} NAMED`;
}
