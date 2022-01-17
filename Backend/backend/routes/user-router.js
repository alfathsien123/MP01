const Router = require('express').Router()

// import controllers
const { user_controllers } = require('../controllers')

// user router
Router.get('/get', user_controllers.getAllUserData) // get all users data
Router.get('/get/:id', user_controllers.getUserDataById) // get user by id
Router.patch('/update/:id') // edit user by id
Router.delete('/delete/:id') // delete user by id

// export router
module.exports = Router