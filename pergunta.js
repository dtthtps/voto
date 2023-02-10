let churrasco = 0
let sushi = 0
function pergunta1(){
churrasco++
atual = "O voto atual foi em churrasco."
texto = churrasco + " pessoas votaram em churrasco e" + "</br>" +sushi + " pessoas votaram em sushi" + "</br>" + "votos totais: " + (churrasco + sushi) 
document.getElementById("texto").innerHTML=texto
document.getElementById("atual").innerHTML=atual
}
function pergunta2() { 
sushi++
atual = "O voto atual foi em sushi."
texto = churrasco + " pessoas votaram em churrasco e" + "</br>" +sushi + " pessoas votaram em sushi" + "</br>" + "votos totais: " + (churrasco + sushi) 
document.getElementById("texto").innerHTML=texto
document.getElementById("atual").innerHTML=atual
}