var idade = 22
console.log(`Com ${idade} Anos`)
if ( idade < 16){
    console.log('Não Vota')
} else if (idade < 18 || idade > 67 ){
        console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatorio')
}