import axios from "axios";


const geturl = (url) => {
    axios.get(url).then(
        res => {
            console.log('status code: ' + res.status)
            console.log('status Text: ' + res.statusText)
            console.log('content length: ' + (res.headers['content-length'] || res.data.length))
            console.log('content Type: ' + res.headers['content-type'])
            console.log('User-Agent: ' + res.config.headers['User-Agent'])
            console.log(res.data)
        }
    )
}

export default geturl