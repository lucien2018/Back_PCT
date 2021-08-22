'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommunsSchema extends Schema {
  up () {
    this.create('communs', (table) => {
      table.increments()
      table.string('identifiant', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('communs')
  }
}

module.exports = CommunsSchema
