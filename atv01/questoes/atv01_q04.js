import axios from "axios";


const getlinks = url => {
    axios.get(url).then(
        res => {
            let body = String(res.data)
        
            let regex = /href="(https?[^"]*)"/g
            let resutaldo = [...body.matchAll(regex)]

            resutaldo.map((value, number) =>{
                console.log(value[1])
            })
        }
    )
}

export default getlinks