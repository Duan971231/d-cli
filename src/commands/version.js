const pkj = require('../../package.json')
const chalk = require('chalk')

function version() {
  console.log(' ', chalk.cyan(`${pkj.name} - ${pkj.version}\n`))
}

module.exports = version