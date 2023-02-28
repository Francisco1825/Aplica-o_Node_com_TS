import { Router } from 'express'
import { v4 as uuidV4 } from 'uuid'
import { Category } from '../model/Category'
import { CategoriesRepository } from '../../repositories/categoriesRepository'
import { CreateCategoryService } from '../service/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (req, res)=>{
  const {name, description } = req.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)
  
  createCategoryService.execute({name, description})

  return res.status(201).send()
})

categoriesRoutes.get("/", (req, res)=>{
  const all = categoriesRepository.list()

  return res.json(all)
})

export { categoriesRoutes }