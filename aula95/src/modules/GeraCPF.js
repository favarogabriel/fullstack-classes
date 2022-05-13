import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
  
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatado(Cpf) {
    return (
      Cpf.slice(0, 3) + '.' +
      Cpf.slice(3, 6) + '.' +
      Cpf.slice(6, 9) + '-' +
      Cpf.slice(9, 11)
    )
  }

  geraNovoCpf() {
    const cpfSemDigito = this.rand();
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
    const novoCpf = cpfSemDigito + digito1 + digito2;
    return this.formatado(novoCpf);
  }
}
