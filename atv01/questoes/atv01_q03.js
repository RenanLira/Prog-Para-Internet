import axios from "axios";
import fs from 'fs';


const baixarPng = url => {
    axios.get(url, {responseType: 'stream', responseEncoding: 'binary'}).then(
        res => {
            res.data.pipe(fs.createWriteStream('./questoes/downloadQuestion/image.png'))
            .on('finish', () => {
                console.log('Download Concluido');
            })
        }
    )
}

export default baixarPng