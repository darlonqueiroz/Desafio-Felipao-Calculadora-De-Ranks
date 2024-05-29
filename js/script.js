
  
const botao = document.getElementById("btn");
let guerreiro ="" ; 
function ranks(nivel){
 
if (nivel<=10){
  return guerreiro = "Ferro";
} else if(nivel >=11 && nivel<=20){
  return guerreiro= "Bronze";
} else if(nivel >=21 && nivel <=50){
  return guerreiro= "Prata";
}else if(nivel >=51 && nivel <=80){
  return guerreiro= "Ouro";
}else if(nivel >=81 && nivel <=90){
  return guerreiro = "Diamante";
} else if(nivel >=91 && nivel <=100){
  return guerreiro = "Lendário";
} else if(nivel >= 101){
  return guerreiro = "Imortal";
  
}
}

botao.addEventListener("click", function (e) {
    let vitorias = Number(document.getElementById("vitorias").value);
    let derrotas = Number(document.getElementById("derrotas").value); 
    let nivel = Number(vitorias - derrotas);
    
           ranks(nivel);
        let box = document.getElementById("box-Child").innerHTML = '<h3>O Herói tem de saldo de '+ nivel + ' está no nível de ' + guerreiro + '</h3>';
        // teste 
        //console.log("O Herói tem de saldo de "+ nivel + " está no nível de " + guerreiro);
       // console.log(vitorias);
       // console.log(derrotas);
       // console.log(nivel);
        //console.log(guerreiro);
    });
