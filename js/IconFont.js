/**
 * IconFont icon set component.
 * Usage: <IconFont name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
  "back": 58880,
  "form": 58881,
  "right": 58882,
  "home": 58883,
  "home-fill": 58884,
  "rank-fill": 58885,
  "rank": 58886,
  "my": 58887,
  "my-fill": 58888,
  "record-fill": 58889,
  "record": 58890,
  "form-fill": 58891
};

let IconFont = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

module.exports = IconFont;
module.exports.glyphMap = glyphMap;
