const NossaString = 'Paulo é';
const outraString = 'qualquer coisa';

// "string" palavra após o const 

console.log(NossaString + ' ' + outraString);

// concatenaçao chama a string + se caso for necessario um espaço utilizar ' ' + a outra string

console.log(`Voce sabia que paulo é ${outraString}`);

// template string com crase `` vc consegue juntar utilizando ${} 

const String = 'Estudo de string Concluido';

console.log(String);

// concluido juncao de string

const numero = 3;

console.log(typeof numero);

// vai informar o tipo se é um numero ou uma string

// se o numero estiver envolvido por '3' ele se transforma em uma string

const numeroExemplo = 2e10;

// informa um 2 seguido por 10 zeros 20000000000

console.log(typeof numeroExemplo, numeroExemplo);

// conseguimos chamar duas strings apenas colocando uma , 

const stringTipoNumero = 'Estudo de string tipo numero concluido';

console.log(stringTipoNumero, numeroExemplo);

// concluido string tipo numero

// - CamelCase deixando o código mais limpo ( Através dela você deixa a primeira letra de cada palavra (de um termo composto) em maiúsculo, com exceção do primeiro termo)

const valorDeCompra = null;

// o valor existe porem ele é nulo

//##### const undefined = undefined; ########

// valor nao existe

let valor;

console.log(typeof valor);

// trás no console undefined pois o valor não foi definido não existe

console.log(typeof valorDeCompra)

// trás no console um objeto, no javaScript todo tipo de dado é um objeto

const nullOuUndefined = 'concluido e entendido null e undefined'

console.log(nullOuUndefined)

// concluido null e undefined

const boolean = true;

// básicamente verdadeiro ou falso {true or false}

const formado = false;

// representações que retornam false ## 0 tipo number zero, NaN, null, undefine,'' e aspasas vázia ou ausência de caracteres, representa false

// representações que retornam true ## ' ' aspas com um espaço ou quanquer caractere dentro dela ja é representado {true} 


// #### construindo um objeto

const Alex = {
    CompleteName: 'Alex Pfaffenzeller',
    idade: 33,
    estado: 'Curitiba',
    showMessage: function(){
        alert('Mensagem')
    }
}
console.log(Alex.CompleteName)  
// acessando o objeto Alex e a chave completeName

console.log(Alex.idade)
console.log(Alex.showMessage())

// Alex em roxo é uma variavel que chama o método/ as chaves são - completeName, idade, estado


// Operadores lógicos
// && // and 
// || // or
// ! // not

const idade = 33
const tipo = "admin"

if (idade > 31 && tipo == "admin"){
    console.log('Ele tem mais de 33 anos e é um admin')
}

// Tem que atender as duas condições

if (idade > 34 || tipo == "admin"){
    console.log('Ele tem mais de 33 anos e é um admin')
}

// Atendendo uma das condições é executado o bloco de código

if (!(idade > 33) && !(tipo == "admin")){
    console.log('Ele tem mais de 33 anos e é um admin')
}

// negação colocar (entre parentes) o bloco a ser negado
// no exemplo a idade não é maior que 33 anos com a (!) negação o valor que está false vira true 

if (idade > 31) {
    console.log('Ele tem mais de 31 anos')
} else if(idade > 25) {
    console.log('Ele tem mais de 25 anos')
} else {
    console.log('Ele não tem idade minima')
} 

// Caso o primeiro bloco seja atendido executa o que está nele, caso contrário executa o (else if) caso nenhum dos blocos sejam contemplados executa o (else) 

switch (idade){
    case 20:
        console.log('Ele tem 20 anos')
        break;
    case 21:
        console.log('Ele tem 22 anos')
        break;
    case 33:
        console.log('Ele tem 33 anos')
        break;

        default:
            console.log('Ele não tem nenhuma das idades anteriores')
}

// Switch case é utilizado para várias validações, é colocado o (break) após cada {case} no intuito de quando for válido parar, caso nenhum seja validado entra no default.



// Estrura de repetições ou loops

for (let numero = 0; numero < 5; numero++) {
    console.log(`Repetição de número ${numero}`)
}

// Repetição enquanto número for < que 5 faça numero + numero (adiciona um numero) 0+1 1+1 1+2 1+3 
// Após console.log escreva a mensagem entre (` `) e ${numero} assim consegue visualizar no console cada uma sendo executada. 

for (let numero = 0; numero < 100; numero++) {
    console.log(`Número ${numero}`)
    if (numero == 50){
        break
    }
}

// Quebrando looping atráves do if e break

const object = {
    Name: 'Alex',
    Idade: '34',
    Cidade: 'Curitiba'
} 

for (key in object){
    console.log(object[key])
}

// Quando chamar o for é criado um key em object, que passa por cada propriedade ex: name, idade, cidade - mostrando o que tem dentro do objeto. ex: Alex, 34, Curitba - colocando o key dentro de []


const array = ['Hb20, Hilux, corolla']

for (item of array) {
    console.log(item)
}

// O array trás todos os objetos

// While

let number = 0;

while (number < 5) {
    console.log(number);
    number++
}

// Vai implementar do 0 até o 4 com esse código

// Declaração das funções

function teste(nome) {
    console.log('function declaration', nome)
}

teste('ALex');


// outro forma de declarar function

const test = function(nam){
    console.log('function expression', nam)
}

test('Alex')

// outra opção de function

const testi = (now) => {
    console.log('Arrow function', now)
}

testi('Agora')



// Outra forma de declarar arrow function (mesmo codigo de cima ^)

const tes = nao => console.log('arrow function', nao);

tes('alex')



// Factorfuncion
const Factorfuncion = (name) => {
    return{
        Logou: () => alert(`O Usuário ${name} logou`),
        Deslogou: () => alert(`O Usuário ${name} deslogou`),
    }
}

Factorfuncion('Alex').Logou();
Factorfuncion('Alex').Deslogou();

// Factorfuncion retorna objetos neste casso alert (banners na página), neste exemplo trás dois banners, o de logou e de deslogou 


// constructor Funcion

function Pessoa(name, idade){
    this.nome = name;
    this.idade = idade
}

const pessoa1 = new Pessoa('Alex', 33);
const pessoa2 = new Pessoa('Camila', 35)




// usamos o padrão pascal case para criar {(Pessoa) primeira letra maiúscula} e após utilizamos o (this.) para falar diretamente com a função, nesse exemplo this.nome {estamos passando um nome para função construtora Pessoa}
// Criando um novo objeto const pessoa1 = (new) Pessoa - utiliza-se o new para criar um novo objeto
// Após Pessoa é passado os parâmetros (name,idade) e repetimos aonde receberá esses parâmetros ex: this.nome recebe o parâmetro = name e this.idade = idade
// Quando declaramos a pessoa1 = new Pessoa insere os parâmetros(name,idade) name entre '' pois é uma estring



// Prototype

function Game(){
    this.pulou = () => alert('O personagem pulou');
    this.deitou = () => alert('O personagem deitou');

}

Game.prototype.correu = () => alert('O personagem correu');

const novoJogo = new Game();

console.log(novoJogo)

// No console aparece (objeto) Game clicando na seta mostra (deitou) e (pulou) para visualizar isso como um alert escreva no console EX: novoJogo.pulou(), novoJogo.deitou(), novoJogo.correu()

const MeuJogo = 'fifa'

console.log(MeuJogo.toUpperCase())

// o construtor transforma o (fifa) que está em minúscula em maiscúlo

