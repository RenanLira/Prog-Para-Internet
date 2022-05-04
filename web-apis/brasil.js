import axios from "axios";

const endpoint = "https://brasilapi.com.br/api/"

const consultarCep = (cep) => {
    let url = endpoint + 'cep/v2/' + cep

    axios.get(url).then(
        res => {
            console.log(res.data)
        }
    )
}

const consultaVeiculos = (tipoVeiculo) => {
    let url = endpoint + 'fipe/marcas/v1/' + tipoVeiculo

    axios.get(url).then(
        res => {
            console.log(res.data)
        }
    )
}

consultarCep(64077785)
// consultaVeiculos('carros')