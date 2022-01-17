const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3300
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h4>Welcome to dev-mysql-api</h4>')
})

const { karyawanRouters } = require('./routers')

app.use('/karyawan', karyawanRouters)

app.listen(PORT, () => console.log('Api Running :', PORT));