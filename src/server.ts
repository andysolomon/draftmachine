import express from 'express'
import router from './router'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200)
    res.json({ message: 'Hello World' })
})


app.use('/api', router)

export default app
