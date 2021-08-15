'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DrensSchema extends Schema {
  up () {
    this.create('drens', (table) => {
      table.increments()
      table.string('nom', 225).notNullable()
      table.string('localisaton', 225).notNullable()
      table.string('codedren', 225).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('drens')
  }
}

module.exports = DrensSchema
