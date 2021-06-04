# fakecode-js
> Um pequeno pacote capaz de gerar codigo javascript valido de forma aleatoria

## Instalação

```
npm install fakecode-js
```

## Uso

```
import { fakeCodeJs } from "fakecode-js";

fakeCodeJs();
/* output: 
var arr = 801738020;
var n1 = arr / 809288364 - arr;
n1 = true;
n1 = arr % n1 + arr;
if (n1 <= n1) {
    n1 = 2151575097;
    n1 = 806648681;
    arr = arr - 5 * 612437295;
    arr = NaN;
}
arr = n1 + n1; */
```

## Como funciona

A função ```fakeCodeJs``` usa a função ```step``` para criar um componente do codigo por vez. Cada componente pode ser uma declaração de variável, uma operação ou uma condicional contendo os anteriores.

Qual desses componentes será gerado é decidido de forma probabilística com base na quantidade de passos já realizados. Da mesma forma, quanto mais interações se passam maior a chance da geração do codigo acabar.

### Conceitos principais
* **register -** Componente responsavel por registrar cada variável criada, assim como seus valores, e fornece-las para uso futuro;
* **lexicon -** Forcenece uma lista de tokens para as declarações de variaveis. Alterando esse arquivo é possivel adicionar seus próprios nomes;

<hr>

## Adições futuras
* variaveis com escopo;
* funções;
* suporte para const e let;
* loop for;
* objetos;
