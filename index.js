const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método `console.log()` em JavaScript?",
      respostas: [
        "Exibir mensagens de erro no console",
        "Exibir mensagens de depuração no console",
        "Exibir mensagens de saída no console",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma única linha em JavaScript?",
      respostas: [
        "<!-- Este é um comentário -->",
        "// Este é um comentário",
        "/* Este é um comentário */",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador `===` faz em JavaScript?",
      respostas: [
        "Verifica se dois valores são iguais, mas não considera o tipo de dado",
        "Verifica se dois valores são iguais e do mesmo tipo de dado",
        "Verifica se dois valores são diferentes",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "myFunction = function() {}",
        "let myFunction = () => {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método que você usa para adicionar um novo elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método que você usa para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão `5 + '5'` em JavaScript?",
      respostas: [
        "55",
        "10",
        "5 + '5'",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método `parseInt()` faz em JavaScript?",
      respostas: [
        "Converte uma string em um número inteiro",
        "Converte um número em uma string",
        "Retorna a parte inteira de um número",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão `typeof([])` em JavaScript?",
      respostas: [
        "'array'",
        "'object'",
        "'array[]'",
      ],
      correta: 1
    },
    // Adicione mais perguntas aqui...
  ]; // Definição da variavel perguntas = Recebendo um array com 2 objetos (Definição dos objetos:  Perguntas: & Alternativa Correta:) Alternativas dentro de outro array
  const quiz = document.querySelector('#quiz') // Seleciona o ID no HTML 
  const template = document.querySelector('template')
  const corrects = new Set()
  const totalQuestion = perguntas.length;
  const totalShow = document.querySelector('#acertos span');
  totalShow.textContent = corrects.size + ' of ' + totalQuestion;
  
  for(item of perguntas) {
    const itemContent = template.content.cloneNode(true)
    itemContent.querySelector('h3').textContent = item.pergunta
    for(const resposta of item.respostas) {
      const subItem = itemContent.querySelector('dl dt').cloneNode(true)
      subItem.querySelector('span').textContent = resposta;
      subItem.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      subItem.querySelector('input').value = item.respostas.indexOf(resposta);
      subItem.querySelector('input').onchange =  (event) => {
        const correct = event.target.value == item.correta;
        corrects.delete(item)
        if(correct) {
          corrects.add(item)
        }
  
        totalShow.textContent = corrects.size + ' of ' + totalQuestion;
      }
      // Append Child
      itemContent.querySelector('dl').appendChild(subItem)
    }
      itemContent.querySelector('dl dt').remove()
      // Append Child
    quiz.appendChild(itemContent)
  }