'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DemandesSchema extends Schema {
  up () {
    this.create('demandes', (table) => {
      table.increments()
      table.string('noms', 225).notNullable()
      table.string('jeunefille', 225).notNullable()
      table.date('creationdate').notNullable()
      table.string('creationemploie', 225).notNullable()
      table.string('creationmatricule', 225).notNullable().unique()
      table.string('creationdirection', 225).notNullable()
      table.string('creationEtablissement', 225).notNullable()
      table.string('creationdiscipline', 225).notNullable()
      table.string('creationfonction', 225).notNullable()
      table.string('resident', 225).notNullable()
      table.string('souhait', 225).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('demandes')
  }
}

module.exports = DemandesSchema
