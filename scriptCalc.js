function calculadora() {
    const operacao = prompt('escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)');

    if (!operacao || operacao > 6 || operacao < 1) {
        alert("Operação inválida.");
        calculadora();
    }
    let n1 = Number(prompt('Insira o primeiro valor'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let resultado;
        if (!n1 || !n2) {
        alert("Insira valores válidos.")
        calculadora()
    } else {
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            outraOperacao();
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            outraOperacao();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            outraOperacao();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            outraOperacao();
        }
        function divisaoInt() {
            resultado = n1 % n2;
            alert(`O resto a divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            outraOperacao();
        }
        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}ª potência é igual a ${resultado}`)
            outraOperacao();
        }
        function outraOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
            if (opcao == 1) {
                calculadora();
            } if (opcao == 2) {
                alert("Até mais!");     
            } else {
                alert("Digite uma opção válida");
                outraOperacao();
            }
        }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInt();
        } else if (operacao == 6) {
            potenciacao();
        }

        /*switch (operacao) {
            case 1: soma(); break;
            case 2: subtracao(); break;
            case 3: multiplicacao(); break;
            case 4: divisaoReal(); break;
            case 5: divisaoInt(); break;
            case 6: potenciacao(); break;
        }*/
    }
}


calculadora();