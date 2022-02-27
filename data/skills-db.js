const skills = [
  {technology: 'HTML', level: 'beginner', _id: 111222},
  {technology: 'CSS', level: 'intermediate', _id: 121835},
  {technology: 'JavaScript', level: 'expert', _id: 436119}
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(todo => todo._id === parseInt(id))
    if (!skill) throw new Error ('No todo was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.level = 'beginner'
  skills.push(skill)
  return callback(null, skill)
}

export {
  find,
  findById,
  create
}