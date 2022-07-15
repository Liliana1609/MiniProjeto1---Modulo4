import readLine from 'readline-sync';

//const prompt = promptSync();

import chalk from 'chalk';

const favorite = chalk.hex('#8B0000')

let arr = []


while(true) {
    let unidade = readLine.question(favorite('Digite uma propriedade CSS: '))
    if(unidade === "sair") {
        break
    }else{
        arr.push(unidade)
    }
}
let resultado = arr.sort()
console.log(resultado.join("\n"))
    