const fs = require('fs')
const utils = require('../utils')
const PATH = './database'

// user controllers
const getAllUserData = (req, res) => {
    try {
        // read database
        const raw_data = fs.readFileSync(PATH + '/data.json')
        if (!raw_data) throw new utils.CreateError(
            'Internal Server Error', 
            500,
            'unexpected error'
        )

        const { users } = JSON.parse(raw_data)
        res.status(200).send(new utils.CreateRespond(
            200,
            'request success',
            users
        ))
    } catch (error) {
        console.log(error)
        res.status(error.code).send(error)
    }
}

const getUserDataById = (req, res) => {
    const id = Number(req.params.id)

    try {
        // read database
        const raw_data = fs.readFileSync(PATH + '/data.json')
        if (!raw_data) throw new utils.CreateError(
            'Internal Server Error', 
            500,
            'unexpected error'
        )

        const { users } = JSON.parse(raw_data)

        // get user by id ? index
        let index = null
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                index = i
                break
            }
        }
        if (index === null) throw new utils.CreateError(
            'Bad request',
            401,
            `${req.method} : ${req.url}`,
            `data not found`,
            `user with id : ${id} doesn't found in our database`
        )
        res.status(200).send(new utils.CreateRespond(
            200,
            'request success',
            users[index]
        ))
    } catch (error) {
        console.log(error)
        res.status(error.code).send(error)
    }
}

// export controllers
module.exports = { getAllUserData, getUserDataById }