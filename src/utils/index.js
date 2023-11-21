function drawSplit(title = 'split here') {
  title ?
    console.log(`------------------${title}------------------`) :
    console.log('------------------------------------');
}

module.exports = {
  drawSplit
}