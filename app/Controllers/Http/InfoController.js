'use strict'

const User = use('App/Models/User')
const Demande = use('App/Models/Demande')
const Interesse = use('App/Models/Interesse')
const Database = use('Database')

class InfoController {

  async enregistrement ({ request, auth, response }) {
    const userData = request.only(['utilisateur', 'email', 'motdepasse'])

    try {
      const user = await User.create(userData)

      const token = await auth.generate(user)

      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'Votre Email doit etre un email valide'
      })
    }
  }

  async Demandeur ({ request, response }) {

    const demandeData = request.only(['noms','jeunefille','creationdate','creationemploie','creationmatricule','creationdirection','creationEtablissement','creationdiscipline','creationfonction'])
     try{

      await Demande.create(demandeData)

      return response.json({
        status: 'succes',
        message: 'votre demande a ete correctement enregistré'
      })
    } catch (e) {
      return response.status(400).json({
        status: 'error',
        message: 'vous avez deja faire une annonces'

      })
    }
  }

  async Interesse ({ request, response }) {

    const interesseData = request.only(['nom','nomdejeune','date','emploie','matricule','direction','etablissement','discipline','fonction'])
     try{

      await Interesse.create(interesseData)

      return response.json({
        status: 'succes',
        message: 'votre annonce a ete enregistré avec succes'
      })
    } catch (err) {
      return response.status(400).json({
        status: 'error',
        message: err

      })
    }

  }

 async loginAdmin ({ request, auth, response }) {

    const { utilisateur, motdepasse } = request.only(['utilisateur', 'motdepasse'])

    try {
      const token = await auth.attempt(utilisateur, motdepasse)

      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      response.status(400).json({
        status: 'error',
        message:'Invalid email/password.'
      })
    }
  }
  async admin ({ auth, response }) {
    return response.json({
      status: 'success',
      data: auth.user
    })
  }
  async Avis({response})

      {
       const annonces = await Database
       .select('*')
       .from('demandes')
       .where('id','<', 3)

       return response.json({
          annonces
       })


      }
}

module.exports = InfoController