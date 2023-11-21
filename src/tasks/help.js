function help(argv) {
  // 获取指令的第一个参数作为需要查询的任务
  const task = argv._[1];

  switch (task) {
    // 对应任务获取对应指令提示
    case 'init':
    case 'run':
    case 'dev':
    case 'build':
      require(`../commands/${task}`)();
      break;
    // 默认展示help指令
    default:
      require('../commands/help')();
      break;
  }
}

module.exports = help;