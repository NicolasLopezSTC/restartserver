import './utils/dotenv.js'

import express from 'express'

const app = express()

const port = parse(process.env.PORT, 10) || 3000

app.get('/', (req, res) => {
    const title = process.env.TITLE || 'finalserver2'
 res.send({ msg: title })
})

app.listen(port)