function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = conta;
      } catch (err) {
        alert('Conta inválida');
        return;
      }
    },

    cliqueBotoes() {
      // this -> Calculadora
      document.addEventListener('click', function(event) {
        const el = event.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      }.bind(this));

    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },


  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
