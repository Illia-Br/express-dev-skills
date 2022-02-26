import { Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'


router.get('/', skillsCtrl.index);

export {
  router
}
