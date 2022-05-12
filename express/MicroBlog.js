const Posts = class Posts {
    constructor(id, text, like){
        this.id = id
        this.text = text
        this.like = like
    }
}

const MicroBlog = class MicroBlog {
    constructor(){
        this.id = 0
        this.posts = []
    }

    create(text) {
        let post = new Posts(this.id, text, 0)
        this.id += 1
        this.posts.push(post)

        return post
    }

    retrieve(id) {
        return this.posts.find(p => p.id == id)
    }

    update(post) {
        let lastPost = this.posts.findIndex(p => p.id == post.id)
        let upPost = new Posts(post.id, post.text, post.like)

        this.posts[lastPost] = upPost

        return this.posts[lastPost]
    }

    delete(id) {
        let post = this.posts.findIndex(p => p.id == id)

        return this.posts.splice(post, 1)
    }

    retrieveAll(){
        return this.posts
    }
}

// const blog = new MicroBlog()

// blog.create('b')
// blog.create('a')

// console.log(blog.delete(0))
// // console.log(blog.update({id: 0, text: 'bb', like: 0}))
// console.log(blog.retrieveAll())
// // console.log(blog.retrieve(1))

export default MicroBlog