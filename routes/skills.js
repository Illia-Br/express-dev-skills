import { Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'


router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

export {
  router
}
