import isObject from 'lodash/isObject';
import isString from 'lodash/isString';

import content from '../content';

const mountNode = document.getElementById('app');
const valid = isObject(mountNode) && isString(content);
if (valid) {
  mountNode.innerHTML = `${content} SINGLE`;
}
