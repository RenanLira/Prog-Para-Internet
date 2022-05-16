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
    let post = blog.retrieve(req.params.id)
    
    post ? res.json(post) : res.status(404).json({text: "não encontrado"}) 
})

app.delete('/posts/:id', (req, res) => {
    res.json(blog.delete(req.params.id))
})

app.put('/posts/:id', (req, res) => {

    const post = {
        id: parseInt(req.params.id),
        text: req.body.text,
        like: parseInt(req.params.like)
    }

    res.json(blog.update(post))
})

app.patch('/posts/:id', (req, res) => {

    const post = blog.retrieve(parseInt(req.params.id))

    if (post){
        res.json(blog.update({
            id: post.id,
            text: req.body.text || post.text,
            like: req.body.like || post.like
        }))
    } else {
        res.status(404).json({text: "não encontrado"})
    }

})

app.post('/posts/:id/like', (req, res) => {

    const post = blog.retrieve(parseInt(req.params.id))

    if (post){
        res.json(blog.update({
            ...post,
            like: post.like + 1
        }))
    } else {
        res.status(404).json({text: "não encontrado"})
    }

})

app.post('/posts', (req, res) => {
    let json = req.body

    blog.create(json.text)

    res.status(201).json(blog.retrieveAll())
})

app.get('/', (req, res) => {
    res.status(200).json({'text': 'ok'})
})



app.listen(port, ()=> {
    console.log(`Servidor esta rodando na porta ${port}`)
})