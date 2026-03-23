import express from 'express'
import authController from '../controllers/auth.controller.js'
import validation from '../middlewares/auth.validation.js'

const router = express.Router()

router.post("/register" ,validation.userRegisterValidation , authController.userRegisterController)


router.post("/login"  , validation.userLoginValidation, authController.userLoginController )

export default router