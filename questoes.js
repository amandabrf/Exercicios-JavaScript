
//questao2
var n1= prompt('Digite um numero');
var n2= prompt ('Digite outro numero');
var soma= parseInt(n1)+ parseInt(n2);
alert ('soma é:'+soma );

//questao3
var lado= prompt ('Digite um lado de um quadrado em cm:')
var per= lado*4
alert ('O perimetro do quadrado é:'+per)

//questao 4

var n1= prompt('digite um numero:')
var quadrado= parseInt(n1)**2
alert ('O quadrado desse numero é:'+ quadrado)

//questao 5
const segundos= 3600
var valorEmHoras= prompt ('Digite um valor em horas:')
var horasParaSegundos= parseInt (valorEmHoras)* segundos
alert('Suas horas em segundos sao:'+ horasParaSegundos)

//questao 6

var idade= prompt ('Digite sua idade :')
if(idade>=0 && idade<=10){
   alert ('Criança')
}
else if (idade>=11 && idade <=15){
    alert ('Adolescente')
}
else if(idade>=16 && idade <=18){
    alert('Jovem')
}
else if(idade>=19 && idade <=60){
    alert ('Adulto')
}
else {
    alert('Idoso')
}

//questao 7 
const limiteVia= 60
const valorMulta= 3.99
var velocidade= prompt ('Digite a velocidade em Km/h:')
if (velocidade>60){
   var kmexcedido= velocidade-limiteVia
   var resultado= kmexcedido*valorMulta
    alert ('Sua multa será de:'+ resultado)
} else{
 alert ('Nao possui multa')
}

//questao 8
const preçoLitroGasolina= 5.99
const preçoLitroAlcool= 4.01

var litros= prompt ('Quantos litros deseja?')
var escolha= prompt ('1.Alcool 2.Gasolina')
if (escolha=='2'){
    var resultado= litros* preçoLitroGasolina
    alert('Vôce irá pagar: '+ resultado)
}else{
    if (escolha=='1'){
        var resultado2=litros* preçoLitroAlcool
        alert('Vôce irá pagar: '+ resultado2)
    }else{
        alert ('Opçao invalida')
    }
}
 

//questao 9

var n1= prompt('Digite um numero');
var n2= prompt ('Digite outro numero');
var escolha= prompt ('1.Somar 2.Subtrair 3.Dividir 4.Multiplicar')
if (escolha=='1'){
    var resultado= parseFloat (n1) + parseFloat (n2)
    alert('O resultado é: '+ resultado)
}else{
    if (escolha=='2'){
        var resultado=parseFloat (n1) - parseFloat (n2)
        alert('O resultado é: '+ resultado)
    } else{
        if (escolha=='3'){
            var resultado=parseFloat (n1) / parseFloat (n2)
            alert('O resultado é: '+ resultado)
        }else{
            if (escolha=='4'){
                var resultado=parseFloat (n1) * parseFloat (n2)
                alert('O resultado é: '+ resultado)
            }else{
                alert ('Opçao invalida')
            }
        }
    }
}

//Resolvida na aula dia 20/04
class Vendedor{
  nome; 
  comissao;
  
valorTotalVendas=0;
adicionarVendas(valor){
  this.valorTotalVendas= this.valorTotalVendas+ valor;
}
calcularComissao (){
 this.comissao= this.valorTotalVendas*0.05
}
}

var vendedor1=  new Vendedor();
vendedor1.nome= "Gabriel Da Silva";
vendedor1.adicionarVendas(25);
vendedor1.adicionarVendas(35);
vendedor1.adicionarVendas(45);
vendedor1.adicionarVendas(55);
vendedor1.calcularComissao();
console.log(vendedor1)

//Exemplo de Paradigma de Orientação a objetos

class Calculadora{
  constructor(){
    this.a= 10
    this.b= 7
this.operador= "mult"
  }
  calcular(){
    if (this.operador==="mult"){
      console.log (this.a* this.b)
    }
  }
}

calculadora= new Calculadora()
calculadora.calcular()

// o objeto é a instancia de uma classe
//os metodos modificam os atributos da classe.


//Questao resolvida em sala dia 27/04

class Livro{
  titulo;
  autor;
  quantidadeEmEstoque;
  emprestimos= [];

 adicionarEmprestimo(emprestimo){
   this.emprestimos.push(emprestimo);
   this. quantidadeEmEstoque= this.quantidadeEmEstoque-1
 }
}

var harryPotter= new Livro();
harryPotter.titulo= "Harry Potter e A Ordem da Fênix";
harryPotter.autor="J.K Rowling";
harryPotter.quantidadeEmEstoque=10;

class Emprestimo{
  cliente;
  quantidadeDiasRestante;
}

var emprestimo1= new Emprestimo();
emprestimo1.cliente= "Amanda"
emprestimo1.quantidadeDiasRestante= 2;

harryPotter.adicionarEmprestimo(emprestimo1);

var emprestimo2= new Emprestimo();
emprestimo2.cliente= "Julia"
emprestimo2.quantidadeDiasRestante=3 

harryPotter.adicionarEmprestimo(emprestimo2);

console.log (harryPotter);

var senhorDosAneis= new Livro();
senhorDosAneis.titulo="Senhor dos Aneis e as Duas Torres"
senhorDosAneis.autor= "J.R. Tolkein";
senhorDosAneis.quantidadeEmEstoque=5;

var emprestimo3= new Emprestimo();
emprestimo3.cliente= "Elias";
emprestimo3.quantidadeDiasRestante= 4;

senhorDosAneis.adicionarEmprestimo(emprestimo3);
console.log (senhorDosAneis)
var evelynHugo= new Livro();
evelynHugo.titulo="Os Sete Maridos de Evelyn Hugo"
evelynHugo.autor= "Taylor Jenkins Reid"
evelynHugo.quantidadeEmEstoque=7;

var emprestimo4= new Emprestimo()
emprestimo4.cliente="Yasmin";
emprestimo4.quantidadeDiasRestante= 3;

evelynHugo.adicionarEmprestimo(emprestimo4);
console.log (evelynHugo)
