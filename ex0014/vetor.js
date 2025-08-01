let valores = [4,5,8,1,3,7]
valores.push(2,9)
valores.sort()
/*
for(let pos = 0; pos< valores.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
*/

//forma simplificada
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}