#! /usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))
const task = process.argv.slice(2)[0] || '--help'

const { drawSplit } = require('../src/utils')
// 绘制分割线
drawSplit('')

switch (task) {
  case '-v':
  case '--version':
    require('../src/commands/version')()
    break;

  case '-h':
  case 'help':
    require('../src/tasks/help')(argv)
    break;

  // case 'init':
  //   require('../src/tasks/init')(argv)
  //   break

  // case 'dev':
  //   require('../src/tasks/dev-server')(argv)
  //   break

  // case 'build':
  //   require('../src/tasks/build')(argv)
  //   break

  default:
    require('../src/tasks/help')(argv)
    break;
}