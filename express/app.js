import express from "express";
import MicroBlog from "./MicroBlog.js";


const app = express()
const port = 3000

const blog = new MicroBlog

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/posts', (req, res) => {
    res.json(blog.retrieveAll())
})

app.get('/posts/:id', (req, res) => {
    res.json(blog.retrieve(req.params.id))
})

app.delete('/posts/:id', (req, res) => {
    res.json(blog.delete(req.params.id))
})

app.put('/posts/:id', (req, res) => {

    post = {
        id: req.params.id,
        text: req.body.text,
        like: req.body.like
    }

    res.json(blog.update(post))
})

app.post('/posts', (req, res) => {
    let json = req.body

    blog.create(json.text)

    res.status(201).json(blog.retrieveAll())
})

app.get('/', (req, res) => {
    res.status(200)
})

app.listen(port, ()=> {
    console.log(`Servidor esta rodando na porta ${port}`)
})