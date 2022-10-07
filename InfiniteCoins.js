"use strict";

function makeChange(n) {
  const pennies = 1;
  const nickles = 5;
  const dimes = 10;
  const quarters = 25;
  const cents = [pennies, nickles, dimes, quarters]; // Vetor dos cents

  const finalResult = new Set();  // Estrutura Set para armazenar cada um dos arrays
  
  cents.forEach((cent, index) => {   //Estrutura para rodar a cada centavo
    const partial = [0, 0, 0, 0];    //Definindo cada conjunto de para cada cent [pennies, nickles, dimes, quarters] nessa ordem
    let sum = 0;
    let countCents = 0;             //Contador de quantas vezes foi somado o valor

    while ( (sum + cent) <= n) {   //Para cada valor de cent enquanto a soma de cents está menor que o número esperado é possível somar mais vezes
      sum = sum + cent;
      countCents++;
    }
    partial[index] = countCents;

    if (sum !== n) {              //Se a soma não alcançou o valor n esperado, um newCent será declarado para complementar a conta até a soma chegar ao n
      for(let i=0; i < index; i++) {
        const newCent = cents[i];
        let newCount = 0;

        while ( (sum + newCent) <= n) {
          sum = sum + newCent;
          newCount++;
        }
        partial[i] = newCount;
      }
    }

    finalResult.add(partial);
  });

  return finalResult;
}

/**
 * O objetivo era calcular todas a possibilidades de combinação para cada valor de cent:
 * Porém não consegui finalizar a etapa recursiva do algoritmo, e para o algoritmo em questão ele apenas chega ao valor n esperado incrementando o pennies=1
 */

const res = makeChange(12);
console.log(res);