import { Router, request, response, Request, Response } from "express";

import { getCadastro } from "./controller/CadastroController";
import { saveCadastro } from './controller/CadastroController';
import { getCadastros } from "./controller/CadastroController";
import { updateCadastro } from "./controller/CadastroController";
import { finishedMatricula } from "./controller/CadastroController";
import { deleteCadastro } from './controller/CadastroController';

const routes = Router()

routes.get('/home', (request: Request, response: Response) => {
    return response.json({message: "hello"})
})

routes.get('/cadastro', getCadastro)
routes.post('/cadastro',saveCadastro)
routes.get('/cadastro/:id', getCadastros)
routes.put('/cadastro/:id', updateCadastro)
routes.delete('/cadastro/:id', deleteCadastro)
routes.patch('/cadastro/:id', finishedMatricula)


export default routes