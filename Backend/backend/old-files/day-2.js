// GET : get users data
app.get('/users', (req, res) => {
    // read database -> get all users data
    fs.readFile(PATH + '/data.json', (error, raw_data) => {
        // check error
        if(error) {
            console.log(error)
            res.status(500).send(error)
            return
        }

        console.log('raw_data : ', raw_data) // BUFFER
        // convert from buffer to original file
        const data = JSON.parse(raw_data)
        console.log('data', data)

        // beautify data
        const final = {
            total : data.users.length,
            data : data.users
        }

        // send it back to client
        res.status(200).send(final)
    })

})

// POST : post new user's data
app.post('/users', (req, res) => {
    fs.readFile(PATH + '/data.json', (error, raw_data) => {
        // check error
        if(error) {
            console.log(error)
            res.status(500).send(error)
            return
        }

        // convert or parse raw data to original data
        const data = JSON.parse(raw_data)

        // protection -> rule : username is unique
        let isExist = false
        data.users.forEach(user => {
            if (user.name === req.body.name) {
                isExist = true
            }
        })

        if (isExist) {
            res.status(400).send('user already exist')
            return
        }
        
        // add new data
        data.users.push({ id : data.users.length + 1, ...req.body })

        // save data to json
        const stringfy_data = JSON.stringify(data, null, 4)

        // write data to json
        fs.writeFile(PATH + '/data.json', stringfy_data, () => {
            console.log('write data success')

            res.status(200).send('post success')
        })
    })
})

// DELETE : delete user by its id
app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id)

    try {
        // read database
        const raw_data = fs.readFileSync(PATH + '/data.json')
        console.log(raw_data)

        // convert or parse data
        const data = JSON.parse(raw_data)

        // delete data -> index ?
        let index = null
        for (let i = 0; i < data.users.length; i++) {
            if(data.users[i].id === id) {
                index = i
                break
            }
        }

        // protection
        if (index === null) {
            throw new CreateError('Bad Request', 404,`${req.method} : ${req.url}`, `user with id : ${id} does't found`)
        }

        data.users.splice(index, 1)

        // write / save data.json
        const stringfy_data = JSON.stringify(data, null, 4)
        fs.writeFileSync(PATH + '/data.json', stringfy_data)
    
        res.status(200).send(new CreateRespond(200, 'data is available', data))
    } catch (error) {
        console.log(error)
        res.status(error.code).send(error)
    }
})

// TODO : PATCH . '/users/:id'
app.patch('/users/:id', (req, res) => {
    const id = Number(req.params.id)

    try {
        // read database
        const raw_data = fs.readFileSync(PATH + '/data.json')
        console.log(raw_data)

        // convert or parse data
        const data = JSON.parse(raw_data)

        // update data -> index ?
        let index = null
        for (let i = 0; i < data.users.length; i++) {
            if(data.users[i].id === id) {
                index = i
                break
            }
        }

        // protection
        if (index === null) {
            throw new CreateError(
                'Bad Request', 
                404,
                `${req.method} : ${req.url}`, 
                `user with id : ${id} does't found`
            )
        }

        // update data
        data.users[index] = { ...data.users[index], ...req.body }

        // write / save data.json
        const stringfy_data = JSON.stringify(data, null, 4)
        fs.writeFileSync(PATH + '/data.json', stringfy_data)

        res.status(200).send(
            new CreateRespond(
                200, 
                'update success', 
                data.users[index]
            )
        )

    } catch (error) {
        console.log(error)
        res.status(error.code).send(error)
    }
})

// TODO : GET . '/users/:id'
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)

    try {
        // read database
        const raw_data = fs.readFileSync(PATH + '/data.json')
        console.log(raw_data)

        // convert or parse data
        const data = JSON.parse(raw_data)

        // get data by id -> index ?
        let index = null
        for (let i = 0; i < data.users.length; i++) {
            if(data.users[i].id === id) {
                index = i
                break
            }
        }

        // protection
        if (index === null) {
            throw new CreateError(
                'Bad Request', 
                404,
                `${req.method} : ${req.url}`, 
                `user with id : ${id} does't found`
            )
        }

        // get data by id
        const user = data.users[index]

        res.status(200).send(new CreateRespond(200, `success`, user))
    } catch (error) {
        console.log(error)
        res.status(error.code).send(error)
    }
})