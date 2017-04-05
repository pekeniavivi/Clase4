// var a=1
// var b=2

//if(a > b){ //false
//  console.log("a es mayor que b, así que no se ve")

//}
//if(a < b){ //true
//  console.log("a es menor que b")
//}

//== igual o semejante "1" == 1 true
// exactamente igual "1" === 1 false
// distinto != 1!= "hola" true
// MUY distinto !== "1" !== 1 true

// var edad = 17
// if (edad >= 18) 
//  alert("puedes")

var Nombre = prompt ("Ingresa tu nombre")
var Edad = prompt ("Ingresa tu edad")
var EdadFutura = prompt ("Qué edad te gustaría tener?")

var Edad2 = Number(Edad)
var EdadFutura2 = Number(EdadFutura)
var Restar = Number(Edad2 - EdadFutura2)



if (EdadFutura > Edad) {
  alert( Nombre + " aún tienen que pasar " +  Restar * -1 + " años para que tengas esa edad.")
} else {
  alert( Nombre + " lo siento esa edad pasó hace " + Restar + " años, no puedes rejuvenecer.")
}


