import express from 'express'

/*@dev::: Config */
const router = express.Router()

router.post('/login', (req, res) => {
    const userTodo = [
        {
            "username": "abhigyan",
            "password": "password is a secret"
        },
        {
            "username": "pryansh",
            "password": "password is another secret"
        },
        {
            "username": "prasum",
            "password": "password is other secret"
        }
    ].filter(e => e.username == req.body.username)
    userTodo.length == 0 && res.status(401).send("wrong user credentials")
    const { username, ...others} = userTodo[0]
    const validated = others.password === req.body.password
    !validated && res.status(401).send('wrong user credentials') 
    res.status(200).send(username)
})

export default router