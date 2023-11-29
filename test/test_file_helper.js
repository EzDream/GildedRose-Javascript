/**
 * Created by zuoxiansheng on 29/11/23
 */

const fs = require('fs')
const {getResult} = require('./texttest_fixture')
const path = require('path')
const expectedFilePath = path.join(__dirname, 'expected_result.txt')

function generateExpectedData() {
  let data = getResult()
  try {
    fs.writeFileSync(expectedFilePath, data)
  } catch (e) {
    console.error(e)
  }
}

function getExpectedData() {
  try {
    return fs.readFileSync(expectedFilePath, 'utf-8')
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  getExpectedData
}
