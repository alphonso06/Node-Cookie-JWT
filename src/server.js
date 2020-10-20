import express from 'express'
import cookieParser from 'cookie-parser'
import passport from 'passport'

import './auth/passport'
import { userRouter } from './routers/user.router'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(userRouter)

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.json({
        message: "Node JWT Cookie Service"
    })
})

app.listen(port, () => {
    console.log(`Server is up at port:${port}`)
})