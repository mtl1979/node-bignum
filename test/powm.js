var BigNum = require('../')
var test = require('tap').test

test('powm', { timeout: 120000 }, function (t) {
  t.deepEqual(BigNum(0).powm(0, undefined), {})
  t.deepEqual(BigNum(0).powm('0', undefined), {})
  t.deepEqual(BigNum(0).powm(BigNum(0), undefined), {})

  t.end()
})
