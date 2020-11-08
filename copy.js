const fs = require('fs')
const path = require('path')

const license = path.join(__dirname, 'LICENSE')

function package (name) {
  return path.join(__dirname, 'packages', name, 'LICENSE')
}

fs.copyFileSync(license, package('javascript'))
fs.copyFileSync(license, package('flow'))
