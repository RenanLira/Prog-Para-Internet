# 🕸️ Atividade 01

> #### Começe com ` cd atv01`

> ### Use `npm start (numero da questao) //(link)` para testar o codigo de cada questão da atividade
>
> > #### exemplo: `npm start 1`.
> >
> > #### caso queira passar um link ` npm start 2 htpps://google.com`
> >
> >  



## 💻️ Codigos fonte das questões:

>  - Questão 02:
>
>  ``````js
>const geturl = (url) => {
>      axios.get(url).then(
>          res => {
>              console.log('status code: ' + res.status)
>              console.log('status Text: ' + res.statusText)
>              console.log('content length: ' + (res.headers['content-length'] || res.data.length))
>              console.log('content Type: ' + res.headers['content-type'])
>              console.log('User-Agent: ' + res.config.headers['User-Agent'])
>              console.log(res.data)
>          }
>      )
>  }
>  ``````
>  
>  - Questão 03:
>
>  ```js
>const baixarPng = url => {
>      axios.get(url, {responseType: 'stream', responseEncoding: 'binary'}).then(
>          res => {
>              res.data.pipe(fs.createWriteStream('downloadQuestion/image.png'))
>              .on('finish', () => {
>                  console.log('Download Concluido');
>              })
>          }
>      )
>  }
>  ```
>  
>  - Questão 04:
>
>  ```js
>const getlinks = url => {
>      axios.get(url).then(
>          res => {
>              let body = String(res.data)
>  
>              let regex = /href="(https?[^"]*)"/g
>              let resutaldo = [...body.matchAll(regex)]
>  
>              resutaldo.map((value, number) =>{
>                      console.log(value[1])
>              })
>          }
>     )
>  }
>  
>  ```



## 🔗 Links:

> - 📹️[Video de explicação](https://youtu.be/GNXA8KHq5Xk)

