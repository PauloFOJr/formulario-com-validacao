let caixaPerguntas = document.querySelectorAll('.caixa');
const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio');
const btnEnviar = document.querySelector('.btn');

caixaPerguntas.forEach((caixa, index) => {
    caixa.addEventListener('input', function() {
        if (caixa.name === "telefone") {
            const telefoneValido = /^\d+$/.test(caixa.value.trim());
            if (caixa.value.trim() === '' || !telefoneValido) {
                caixa.classList.add('campo-obrigatorio');
                caixa.classList.remove('campo-valido');
                campoObrigatorio[index].classList.remove('escondido');
            } else {
                caixa.classList.remove('campo-obrigatorio');
                caixa.classList.add('campo-valido');
                campoObrigatorio[index].classList.add('escondido');
            }
        } else {
            if (caixa.value.trim() === '') {
                caixa.classList.add('campo-obrigatorio');
                caixa.classList.remove('campo-valido');
                campoObrigatorio[index].classList.remove('escondido');
            } else {
                caixa.classList.remove('campo-obrigatorio');
                caixa.classList.add('campo-valido');
                campoObrigatorio[index].classList.add('escondido');
            }
        }
    });
});

btnEnviar.addEventListener('click', function(event) {
    event.preventDefault();

    let formularioValido = true;

    caixaPerguntas.forEach((caixa, index) => {
        if (caixa.name === "telefone") {
            const telefoneValido = /^\d+$/.test(caixa.value.trim());
            if (caixa.value.trim() === '' || !telefoneValido) {
                caixa.classList.add('campo-obrigatorio');
                caixa.classList.remove('campo-valido');
                campoObrigatorio[index].classList.remove('escondido');
                formularioValido = false;
            } else {
                caixa.classList.remove('campo-obrigatorio');
                caixa.classList.add('campo-valido');
                campoObrigatorio[index].classList.add('escondido');
            }
        } else {
            if (caixa.value.trim() === '') {
                caixa.classList.add('campo-obrigatorio');
                caixa.classList.remove('campo-valido');
                campoObrigatorio[index].classList.remove('escondido');
                formularioValido = false;
            } else {
                caixa.classList.remove('campo-obrigatorio');
                caixa.classList.add('campo-valido');
                campoObrigatorio[index].classList.add('escondido');
            }
        }
    });  
    if (formularioValido) {
        caixaPerguntas.forEach((caixa) => {
            caixa.value = '';
            caixa.classList.remove('campo-valido');
        });
    }  
});