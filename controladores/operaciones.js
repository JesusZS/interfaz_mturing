
function sumar(A,B){
    let a=0

    let as=String(A)
    let element = Array(as.length)

    for (let i = 0; i < as.length; i++) {
        element[i]=as.charAt(i);
        console.log(as.charAt(i));
        console.log(' ');
    }

    console.log('resultado:',as);
    console.log(element);
}

sumar(12,45)



function modulo_2(c){
    let num=c
    
    if c==1

    return modulo_2(num%2)

}



function complemento_A_2(cadena){
    let salida = Array(cadena.length);

for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i)==1) {
        salida = 0
    }
    else{
        salida = 1
    }
}
}