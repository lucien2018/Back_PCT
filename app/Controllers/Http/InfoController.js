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

    const demandeData = request.only(['noms','jeunefille','creationdate','creationemploie','creationmatricule','creationdirection','creationEtablissement','creationdiscipline','creationfonction','souhait','resident'])
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

    const interesseData = request.only(['identifiant','nom','nomdejeune','date','emploie','matricule','direction','etablissement','discipline','fonction'])
     try{

      await Interesse.create(interesseData)

      return response.json({
        status: 'succes',
        message: 'votre annonce a ete enregistré avec succes'
      })
    } catch (err) {
      return response.status(400).json({
        status: 'error',
        message: "Cette affiche n'est plus disponible"

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
        message:'email ou mot de passe invalide'
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
       .where('id','<=', 8)

       return response.json({
          annonces
       })
      }

  
   async recup({request,response}){

     try {   
      const identifian= request.only(['identifiant'])

      const donnee = await Database
      .select('*')
      .from('demandes')
      .where({'id': identifian.identifiant})

      const autres = await Database
      .select('*')
      .from('interesses')
      .where({'identifiant': identifian.identifiant})

      return response.json({
        donnee,
        autres
      }) 
      
     } catch (e) {
      return response.status(400).json({
        status:'error',
        message: 'cette demande est inexistente'
      })
     }
    }
    async Delete({request, response}){
      
      const identifian = request.only(['identifiant'])
      try{
       await Database.table('demandes').where({'id': identifian.identifiant}).delete()
       await Database.table('interesses').where({'id': identifian.identifiant}).delete()

          return response.json({
            status: 'succes',
            SuccesMessage: 'annonce supprimé avec succes'
            
          })
        
      }catch(e){
        return response.status(400).json({
          status: 'error',
          message: "impossible de faire cette supression"
          
        })
      }

    }

}

module.exports = InfoController
