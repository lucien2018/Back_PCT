'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EcolesSchema extends Schema {
  up () {
    this.create('ecoles', (table) => {
      table.increments()
      table.string('nom', 225).notNullable()
      table.string('localisaton', 225).notNullable()
      table.string('codeecole', 225).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ecoles')
  }
}

module.exports = EcolesSchema
