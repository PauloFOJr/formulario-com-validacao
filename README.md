
# Criação de um formulário com validação.

Índice

- [Visão geral](#visão-geral)
- [O desafio](#the-challenge)
- [Captura da tela](#captura-de-tela)
- [Links](#links)
- [Meu processo](#meu-processo)
- [Construído com](#construído-com)
- [O que eu aprendi](#o-que-eu-aprendi)
- [Desenvolvimento contínuo](#continued-development)
- [Autor](#autor)


### Visão geral
-A validação do formulário deve ser feita com
javascript puro.
-Ao clicar para enviar o formulário, se caso
algum campo não estiver preenchido, a borda
do input deve ficar vermelha e uma mensagem
de "campo obrigatório" deve aparecer embaixo
do campo que não foi preenchido, conforme o
figma.
-O fundo do formulário deve ser feito usando a
imagem em anexo na aula.

### Captura de tela

![Captura da tela](Captura%20de%20tela%202025-08-19%20202220.png)

### Links

- URL do site ativo:(https://paulofojr.github.io//)

### Meu processo

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Flexbox
-JavaScript

### O que eu aprendi

A utilização de HTML e CSS, já está mais clara, mas ainda avançando com o uso do JavaScript.

Para ver como você pode adicionar trechos de código, veja abaixo:
``` HTML
 <textarea class="caixa maior" name="mensagem" placeholder="Mensagem *"></textarea>
```
```css
@media (max-width: 600px) {
    .duvidas {
        flex-direction: column;       
    }
    .pergunta {
        padding-right: 0px;
        padding-bottom: 20px;
}
}
```

```JS
let caixaPerguntas = document.querySelectorAll('.caixa');
const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio');
const btnEnviar = document.querySelector('.btn');
```

### Desenvolvimento contínuo

O processo é longo, mas a evolução é contínua. 

### Autor

[@PauloFOJr](https://www.frontendmentor.io/profile/PauloFOJr)
[@PauloFOJr](https://github.com/PauloFOJr)