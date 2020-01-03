/* eslint-disable no-sequences */
'use strict';
// 外部插件都在这里面
/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
},

exports.cors = {
  enable: true,
  package: 'egg-cors',
// eslint-disable-next-line eol-last
}