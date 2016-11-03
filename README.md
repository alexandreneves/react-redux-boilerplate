# react-redux-boilerplate

Simple exercise for a masters class post-workshop at the University of Aveiro.

## Install & hack

```
git clone https://github.com/alexandreneves/react-redux-boilerplate.git
npm install
npm start
```

## Novidades (pt_PT)

Este novo exercício apresenta uma série de conceitos/packages novos que foram apenas levemente abordados no workshop de forma a simplificar o mesmo. Abaixo vou apresentar cada um desses conceitos/packages dando em alguns casos um exemplo.

Para recordar seguem os conceitos/packages principais já abordados no workshop.

+ **react**: user interface components
+ **redux**: flux flow; state container
+ **webpack**: module manager
+ **babel**: compiler
+ **gulp**: task automator; build process

### Router ([react-router](https://github.com/ReactTraining/react-router))

Este package/router permite sincronizar componentes da vossa webapp com o URL do browser; por outras palavras permite que dado um URL seja rendered um determinado componente.

```javascript
<Router history={browserHistory}>
    <Route path="/" component={App}> // 1
        <IndexRoute component={List} /> // 2
        <Route path="/g/:id" component={ItemDetail} /> // 3
    </Route>
    <Redirect path="*" to="/" /> // 4
</Router>
```

O exemplo acima é um excerto da webapp em questão e teria o seguinte resultado:
+ 1 - url **/** renderiza o componente **App.jsx** e contém duas child rules que passam determinados componentes como filhos (como **props**) para dentro do **App.jsx**
+ 2 - ou seja, a IndexRoute da regra principal/pai (**/**) vai receber o componente (filho) **List.jsx**
+ 3 - **/g/:id** renderiza o componente **ItemDetail.jsx**, também enviado como filho para dentro do **App.jsx**
+ 4 - se nenhuma regra for *matched* o user é redirecionado para **/**

Algumas considerações:
+ usar **react-router** é uma boa solução para webapps simples
+ numa webapp mais complexa poderá ser necessário levar o conceito de single store do **redux** à risca e usar alternativas ao **react-router** visto que este tem um state próprio:
   + usar **redux-router** pois permite que o router e a store se coordenem entre si, resultando num unico state
   + usar **react-router** em conjunto com **react-router-redux** para atingir esse mesmo resultado
   
### Async actions [redux-thunk](https://github.com/gaearon/redux-thunk) + [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)

O exercício apresentado no workshop era 100% síncrono, isto é, todas as actions dispached obtinham uma resposta síncrona, imediata. Por defeito este tipo de actions (synchronous) são as únicas que o **redux** suporta. Para dar suporte a asynchronous actions o **redux** requer ambos os packages mencionados neste tópico (acima). Por outras palavras, instalar estes packages vai permitir que façam requests à vossa API e lidem com as respostas.

+ **redux-thunk**: é um [middleware](https://en.wikipedia.org/wiki/Middleware) aplicado na criação da vossa Store que torna possível ao **redux** lidar com async actions
+ **isophormic-fetch**: facilita todo o processo de fazer pedidos (async) e lidar com as respostas

### Boilerplating [create-react-app](https://github.com/facebookincubator/create-react-app)

Este package só faz sentido para quem quiser começar a sua webapp do zero. Após instalar o package globalmente ```npm install -g create-react-app``` basta correr o comando ```create-react-app nome-da-app``` para que seja gerado uma pasta com o nome escolhido (nome-da-app) com uma arquitectura de pastas/ficheiros standard e funcional, assim como todo o ambiente de desenvolvimento e deployment necessário configurado e pronto a usar. Esta última feature é da responsabilidade de um package - **react-scripts** - incluído na webapp gerada (ver tópico seguinte).

Lembrem-se que esta webapp contém somente **react**, terão de instalar, entre outros, os packages abordados no workshop e neste exemplo.

### Build process [react-scripts](https://www.npmjs.com/package/react-scripts)

Este package, que vem instalado por defeito nas webapps geradas usando o **create-react-app**, também pode ser instalado usando o **npm** como qualquer outro package. O objectivo deste é abstrair toda a complexidade existente hoje em dia para instalar e configurar um ambiente de desenvolvimento e deployment. Por trás deste package estão muitos outros, alguns dos quais foram falados no workshop como **Webpack** e **Babel**.

Este package insere uma série de scripts no **package.json** para correrem os processos habituais:

```javascripts
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
```

+ start: inicia o servidor de desenvolvimento, com auto reload, **ESLint**, ...
+ build: build para deployment em produção, otimizado, minified, ...
+ test: correr testes
+ eject: (irreversível) copia todos as configurações (**Webpack**, **Babel**, ...) para o vosso projecto para quem quiser tomar controlo do processo

**Nota**:
+ esta abordagem de não recorrer a task managers tais como **Gulp** ou **Grunt** mas sim a **npm scripts** tem sido uma tendência nos últimos anos
+ uma das limitações atuais que poderá afectar os que tiverem uma webapp com uma componente **CSS** mais complexa é a falta de suporte para pre-processors (**SASS**, **LESS**); uma solução seria recorrerem ao **gulp** e **gulp-sass** para lidar com essa tarefa temporariamente até que seja dado suporte

### Made with ♥
