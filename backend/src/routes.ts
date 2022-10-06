import {Router,  Request, Response} from 'express'
import { getUserGab, getUsersGab, saveUserGab, updateUserGab, removeUserGab} from './controller/UserController'
import { getGabs, getGab, saveGab, updateGab, removeGab} from './controller/UserController'



const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json( {message: 'Faculdade da Indústria!'})
}) 

//rotas para Usuers
routes.get('/UsersGAB',getUsersGab)
routes.get('/UserGAB/:id',getUserGab)
routes.post('/UserGAB',saveUserGab)
routes.put('/UserGAB/:id',updateUserGab)
routes.delete('/UserGAB/:id',removeUserGab)


//Rotas para dados da faculdade
routes.get('/gabs',getGabs)
routes.get('/gab/:id',getGab)
routes.post('/gab',saveGab)
routes.put('/gab/:id',updateGab)
routes.delete('/gab/:id',removeGab)


export default routes