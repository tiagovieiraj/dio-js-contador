let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

let btnDecrementar = document.getElementById('btnDecrementar')
btnDecrementar.addEventListener('click', decrement);

let btnIncrementar = document.getElementById('btnIncrementar')
btnIncrementar.addEventListener('click', increment)


/* Função para*/
function decrement() {
    /* Condição para desabilitar o botão decrementar quando chegar ao valor -10 */
    if (currentNumber <= -10) {
        mostrarNaTela();
        btnDecrementar.style.display = 'none';
    } else {
        currentNumber--;
        mostrarNaTela();

    }
    btnIncrementar.style.display = 'block';
}

function increment() {
    /* Condição para desabilitar o botão decrementar quando chegar ao valor -10 */
    if (currentNumber >= 10) {
        mostrarNaTela();
        btnIncrementar.style.display = 'none';
    } else {
        currentNumber++;
        mostrarNaTela();
    }
    btnDecrementar.style.display = 'block';
}

function mostrarNaTela() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else {
        currentNumberWrapper.style.color = 'black';
        currentNumberWrapper.innerHTML = currentNumber;
    }

}