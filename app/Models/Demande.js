'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Demande extends Model {

  interesses () {
    return this.hasOne('App/Models/Interesse')
  }
}

module.exports = Demande
