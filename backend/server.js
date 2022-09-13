import express from 'express'
import dotenv from 'dotenv'
import login from './routes/login.js'
// import data from './data.json'
import cors from 'cors'
// app config
const app = express()
dotenv.config()

// middleware
app.use('/image',express.static('assets'))

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => res.status(200).send('Hi people'))

app.use('/api/v1', login)

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`server is listening through ${port}`))