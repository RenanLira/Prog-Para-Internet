import axios from "axios";

const endpoint = 'https://api.funtranslations.com/translate/'

const translate = (text, s) => {
    let url = endpoint + s

    axios.post(url,
        {
            text
        }).then(res =>{
            console.log(res.data)
        })
}

translate('my name is Renan', 'minion')