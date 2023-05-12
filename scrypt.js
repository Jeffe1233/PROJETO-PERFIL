alert("Ola Seja Bem_vindo!")
let p1 = prompt ("Digite seu nome");

let p2 = prompt ("Digite um Poder que gostaria ter");

let p3 = prompt ("Digite o nome de um Vilao");

let p4 = prompt ("Digite o nome de um lugar que gostaria de estar");

let msg = document.getElementById('msg');


/* para chamar o id msg e mostrar na tela precisamos criar msg em seguida o innerHTML (mostre no 
html) 
`` a crase é uma estrutura na nova versão do javascript chamada TEMPLAIT STRINGS
$ representa a string
{} onde é passado a variável que deseja manipular como concatenar, como no exemplo abaixo
*/

msg.innerHTML=`<p>Ola ${p1} o seu poder e a/o ${p2} voce vai enfrentar o/a ${p3} no/em ${p4}.`

