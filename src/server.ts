import express from 'express'
import router from './router'
import cors from 'cors'

const app = express()


app.use(cors({
    origin: 'http://localhost:3000', // Your Next.js app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200)
    res.json({ message: 'Hello World' })
})


app.use('/api', router)

export default app
