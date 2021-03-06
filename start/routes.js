'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.post('CreationPermutation', 'InfoController.Demandeur')
  Route.post('index', 'InfoController.Interesse')
  Route.post('enregistrement', 'InfoController.enregistrement')
  Route.post('admin', 'InfoController.loginAdmin')
  Route.post('impression', 'InfoController.recup')
  Route.get('administration', 'InfoController.admin').middleware(['auth'])
  Route.get('index', 'InfoController.Avis')
  Route.delete('impression', 'InfoController.Delete')
  Route.get('impression','InfoController.recup')
}).prefix('api')

