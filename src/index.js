const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')
const _ = require('lodash')

module.exports = {
  todas: _.sortBy(cervezas, ['nombre']),
  miPreferida: 'Ambar',
  alazar: uniqueRandomArray(cervezas)
}
