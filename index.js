const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 10;",
        "var myVar = 10;"
      ],
      correta: 1 // Resposta B
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1 // Resposta B
    },
    {
      pergunta: "Qual é o método utilizado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "splice()",
        "shift()"
      ],
      correta: 0 // Resposta A
    },
    {
      pergunta: "O que o método 'map()' faz em JavaScript?",
      respostas: [
        "Itera sobre os elementos de um array e executa uma função em cada um deles.",
        "Remove o último elemento de um array.",
        "Adiciona um elemento no final de um array."
      ],
      correta: 0 // Resposta A
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "const myFunction = function() {}",
        "Todas as anteriores estão corretas."
      ],
      correta: 2 // Resposta C
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->"
      ],
      correta: 0 // Resposta A
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Evaluates to true if both operands are true.",
        "Evaluates to true if either operand is true.",
        "Evaluates to true if at least one operand is true."
      ],
      correta: 0 // Resposta A
    },
    {
      pergunta: "Qual é o método usado para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "toFixed()"
      ],
      correta: 0 // Resposta A
    },
    {
      pergunta: "O que o método 'filter()' faz em JavaScript?",
      respostas: [
        "Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.",
        "Remove o último elemento de um array.",
        "Adiciona um elemento no final de um array."
      ],
      correta: 0 // Resposta A
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento no final de um array em JavaScript?",
      respostas: [
        "push()",
        "unshift()",
        "concat()"
      ],
      correta: 0 // Resposta A
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
    const dt = quizItem.querySelector ('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
     
     corretas.delete(item)
     if(estaCorreta) {
       corretas.add(item)
     }
  
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
  
  
  
   }
  
   quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  