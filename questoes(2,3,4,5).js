// Codigo da QUESTAO 2 EM JS
function GenerateFibonacci(number){ //funcao que calcula a sequencia
  var fibonacci = []; // definindo vetor
  fibonacci[0] = 0; // definindo as primeiras posicoes dos vetores 
  fibonacci[1] = 1;
  for (var i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
  }
  var f = GenerateFibonacci(20); //digite a quantidade de numeros a serem gerados aqui
  console.log(f);


  //QUESTAO 3 EM JS
// Consumindo o arquivo de dados JSON para a questao 3
const jsonData = require('./dados.json');
console.log('[DADOS] ==> ', jsonData, '\n\n');

// Tratando os dados para a manipulação
const newData = jsonData.filter((a) => a.valor > 0);

console.log('[newData] ==> ', newData, '\n\n');

// Ordenando o vetor por meio dos objetos de valor de forma crescente
const minValue = newData.sort((a, b) => {
  return a.valor - b.valor;
})[0];

// Ordenando o vetor por meio dos objetos de valor de forma decrescente
const maxValue = newData.sort((a, b) => {
  return b.valor - a.valor;
})[0];

console.log('[minValue] ==> ', minValue, '\n\n');

console.log('[maxValue] ==> ', maxValue, '\n\n');

// Soma dos valores dos dias que tiveram renda com o total de dias de atividade
const media =
  newData.reduce((total, day) => day.valor + total, 0) / newData.length;

console.log('[media] ==> ', media, '\n\n');

// filtragem dos dias em que renda diária fosse maior que a media e ordenação por dia
const maxInvoicing = newData
  .filter((day) => day.valor > media)
  .sort((a, b) => {
    return a.dia - b.dia;
  });

console.log('[maxInvoicing] ==> ', maxInvoicing, '\n\n');

// Total de dias de faturamento superior a media
console.log('[totalDaysMaxInvoicing] ==> ', maxInvoicing.length, '\n\n');


//QUESTAO 4 EM PYTHON 
/* # Definindo os estados para uma melhor manipulação:
e = ['SP', 'RJ', 'MG', 'ES', 'OUTROS']

faturamento = list()
for c in e:
    # Capturando e tratando os valores digitados:
    while True:
        try:
            v = float(input(f'Digite o faturamento mensal de {c}: '))
            if v < 0:
                print('\033[31mValor INVÁLIDO! Digite apenas valores maiores ou iguais a "0":\033[m')
            break
        except:
            print('\033[31mValor INVÁLIDO! Digite apenas valores reais!\033[m')

    # Armazenando os valores digitados na lista faturamento
    faturamento.append(v)

# Calculando o faturamento total da distribuidora:
faturamento_total = sum(faturamento)
print(f'\033[32mO faturamento total da Distribuidora foi: R$ {faturamento_total:.2f}'.replace('.', ','))

# Calculando e exibindo o percentual relativo de cada filial de cada estado:
cont = 0
for i in faturamento:
    cont += 1
    percentual = ((i / faturamento_total) * 100)
    print(f'O percentual de faturamento de {e[cont - 1]} é: {percentual:.2f} %') */

// QUESTAO 5
function reverseString(str) {
  var o = '';
  for (var i = str.length - 1; i >= 0; i--) {
      o += str[i];
  }
  return o;
}

console.log(reverseString("roma"));