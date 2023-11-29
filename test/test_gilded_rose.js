var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
const {getExpectedData} = require('./test_file_helper')
const {getResult} = require('./texttest_fixture')
describe("Gilded Rose", function() {

  it("alway equal expected data", function() {
    let expectResult = getExpectedData()
    let currentResult = getResult()
    expect(currentResult).to.equal(expectResult);
    console.log('pass expected data test!')
  });

});
