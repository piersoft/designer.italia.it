const execSync = require('child_process').execSync
const async = require('async')
const moment = require('moment')

const PAGES_DIR = 'pages'

// get dates of last commits
// git ls-files -z | xargs -0 -n1 -I{} -- git log -1 --format="%ai {}" {}

const getLastModifiedDates = (err, cb) => {
  return execSync(`git ls-files ${PAGES_DIR}`).toString().split('\n').reduce((acc, file) => {
    const date = execSync(`git log -1 --format="%ai" ${file}`).toString()
    const dayAgo = moment(date, "YYYY-MM-DD HH:mm:ii Z").locale('it').fromNow()
    const fileName = file.replace(/^pages\//, '').replace(/\.md$/, '')
    acc[fileName] = dayAgo
    return acc
  }, {})
}

module.exports = {
  getLastModifiedDates
}
