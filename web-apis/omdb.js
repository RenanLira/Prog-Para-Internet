import axios from "axios";

const key = "322939f3"
const endpoint = "http://www.omdbapi.com/?apikey=" + key

const pesquisarFilme = (title) => {

    let url = `${endpoint}&s=${title}&type=movie&plot=full`

    axios.get(url).then(
        res => {
            console.log(res.data)
        }
    )
    
}

pesquisarFilme("Batman")