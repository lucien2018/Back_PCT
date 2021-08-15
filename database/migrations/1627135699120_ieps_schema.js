'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IepsSchema extends Schema {
  up () {
    this.create('ieps', (table) => {
      table.increments()
      table.string('nom', 225).notNullable()
      table.string('localisaton', 225).notNullable()
      table.string('codeiep', 225).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ieps')
  }
}

module.exports = IepsSchema
