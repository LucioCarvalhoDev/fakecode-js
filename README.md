# fakecode-js
> Um pequeno pacote capaz de gerar pequenas quantidades de codigo javascript valido de forma aleatoria

## Instalação

```
npm install fakecode-js
```

## Uso

```
import { fakeJS } from "fakecode-js";

fakeJS() // lorem ipsum de javascript
```

## Como funciona

A função ```fakeJS``` usa a função ```step``` para criar um componente do codigo por vez. Cada componente pode ser uma declaração de variável, uma operação, ou uma condicional contendo os anteriores.

Qual desses componentes será gerado é decidido de forma probabilística com base na quantidade de passos já realizados. Da mesma forma, quanto mais passos se passam maior a chance da geração do codigo acabar.

### Conceitos principais
* **register -** Componente responsavel por registrar cada variável criada e fornece-las para uso futuro;
* **lexicon -** Forcenece uma lista de tokens para as declarações de variaveis. Alterando esse arquivo é possivel adicionar seus próprios nomes;

<hr>

## Adições futuras
* variaveis com escopo;
* funções;
* suporte para const e let;
* loop for;
* objetos;
