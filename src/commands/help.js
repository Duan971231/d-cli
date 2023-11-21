const chalk = require('chalk')
const { drawSplit } = require('../utils')
const version = require('./version')



function help() {
  version()

  console.log(chalk.green('  Usage:\n'))
  console.log('    cl <task> [options]')

  drawSplit('')

  console.log(chalk.green('  Task:\n'))
  console.log('    init <project>               创建名为<project>的新项目')
  console.log('    build --template <template>  根据框架类型<template>构建项目，缺省为vue')
  console.log('    dev --template <template>    根据框架类型<template>进行dev，缺省为vue')
  console.log('    run <script>                 运行脚本<script>')
  console.log('    help <task>                  显示<task>指令提示');

  drawSplit('')

  console.log(chalk.green('  Options:\n'))
  console.log('    help, -h       指令提示')
  console.log('    --version, -v    版本号')

  drawSplit('')
}

module.exports = help