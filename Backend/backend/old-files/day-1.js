// #1 : database
const users = [
    { id : 1, name : 'alee', gender : 'male' }
]
// #2 : JSON file
// #3 : MySQL

// create routing
app.get('/', (req, res) => {
    res.status(200).send(`<h1>Hello World</h1>`)
})

//  GET : users
app.get('/users', (req, res) => {
    res.status(200).send(users)
})

// POST : users
app.post('/users', (req, res) => {
    console.log('req.body : ', req.body)
    
    const newUser = {
        id : users.length + 1,
        name : req.body.name,
        gender : req.body.gender
    }
    users.push(newUser)
    
    res.status(200).send(users)
})

// DETELE : users
app.delete('/users/:id', (req, res) => {
    console.log(req.params)
    const id = Number(req.params.id)

    // search index user with give id
    let index = null
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            index = i
            break
        }
    }

    // error handing
    if (index === null) {
        res.status(404).send(`user with id : ${id} is not found`)
        return
    }

    // delete user at index user with given id
    users.splice(index, 1)

    res.status(200).send(users)
})

// TODO : buat route untuk PATCH
app.patch('/users/:id', (req, res) => {
    const id = Number(req.params.id)

    // search index
    let index = null
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            index = i
            break
        }
    }
    
    
    // error handing
    if (index === null) {
        res.status(404).send(`user with id : ${id} is not found`)
        return
    }

    // update datanya
    users[index] = { ...users[index], ...req.body }

    res.status(200).send(users[index])
})