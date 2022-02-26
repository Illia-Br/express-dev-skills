import * as skillsDb from '../data/skills-db.js'

function index(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('views/index', {
      error: error,
      skills: skills
    })
  })
}
  
  export {
    index
  }