'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InteressesSchema extends Schema {
  up () {
    this.create('interesses', (table) => {
      table.increments()
      table.integer('identifiant').notNullable().unsigned().unique()
      table.string('nom', 225).notNullable()
      table.string('nomdejeune', 225).notNullable()
      table.date('date').notNullable()
      table.string('emploie', 225).notNullable()
      table.string('matricule', 225).notNullable().unique()
      table.string('direction', 225).notNullable()
      table.string('etablissement', 225).notNullable()
      table.string('discipline', 225).notNullable()
      table.string('fonction', 225).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('interesses')
  }
}

module.exports = InteressesSchema
