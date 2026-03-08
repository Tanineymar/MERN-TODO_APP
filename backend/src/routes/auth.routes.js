import express from 'express'
import authController from '../controllers/auth.controller.js'
import userRegisterValidation from '../middlewares/auth.validation.js'
const router = express.Router()

router.post("/register" ,userRegisterValidation , authController.userRegisterController)


router.post("/login"  ,authController.userLoginController )

export default router