// Atividade do Encontro Remoto 2
/* Percorrer do zero até o número de alunos
OK Se o número for par, escreva 'par' e o número correspondente
OK Se o número for ímpar, escreva 'ímpar' e o número correspondente
OK Se o número for zero, escreva 'zero' e o número correspondente
*/

let numeroDeAlunos = 10
// contador ++ é a mesma coisa que contador = contador + 1 exemplo: x = 3, x = 3 + 1
let contador = 0
while (contador <= numeroDeAlunos){
    //console.log(contador)
    
    if(contador == 0){
        console.log("O número atual é zero")
    } else if (contador % 2 != 0) {
        console.log("O número "+ contador + " é IMPAR")
    } else{
        console.log(`O número ${contador} é PAR`)
    }

    contador++
}