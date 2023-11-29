/**
 * Created by zuoxiansheng on 29/11/23
 */

let logs = []

function clearLogs() {
  logs = []
}

function log(info) {
  logs.push(info)
//  console.log(info)
}

function getAllLogs() {
  return logs.join('\n')
}

module.exports = {
  clearLogs,
  log,
  getAllLogs,
}
