import geturl from './questoes/atv01_q02.js'
import baixarPng from './questoes/atv01_q03.js'
import getlinks from './questoes/atv01_q04.js'


const exemplos = questao => {
    let num = parseInt(questao)

    switch (num) {
        case 1:
            console.log('Foi usada a biblioteca "axios" para o desenvolvimento da atividade')
            break;

        case 2:
            geturl('https://google.com')
            break;
        
        case 3:
            baixarPng('https://a.espncdn.com/i/teamlogos/soccer/500/819.png')
            break;
        
        case 4:
            getlinks('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll')
            break;

        default:
            console.log('Questao invalida')
    }
}


exemplos(process.argv.slice(2)[0])
