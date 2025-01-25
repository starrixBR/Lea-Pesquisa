
// Professores com links, idiomas e áreas
const professores = [
    { 
      nome: "Adriana Fernandes Barbosa", 
      areas: ["Língua e cultura", "Linguística", "Multimodalidade na Interação Face a Face ou Mediada",
    "Semiótica Social", "Linguística Cognitiva", "Linguística Cultural"], 
      /* Sugeriu: Multimodalidade na interação face a face ou mediada / 
      Semiótica Social / Linguística Cognitiva e Cultural!*/
      linguas: ["Alemão", "Inglês"], 
      lattes: "http://lattes.cnpq.br/3065127356052281", 
      foto: "imagens/ADRIANA QUIZ.jpg",
      email: "adriana.barbosa@unb.br" 
    },
    { 
      nome: "Alessandra Matias Querido", 
      areas: ["História em quadrinhos","Sociedade da Informação", "Tradução", "Língua e cultura",
      "Literatura e outras artes","Questões de gênero"], 
      linguas: ["Inglês"], 
      lattes: "http://lattes.cnpq.br/9582760816449975", 
      foto: "imagens/ALESSANDRA QUIZ.jpg",
      email: "alequerido@gmail.com"
    },
    { 
      nome: "Antônio Marcos Moreira", // 1 Não respondeu o Forms!
      areas: ["Questões de gênero"], 
      linguas: ["Francês"], 
      lattes: "http://lattes.cnpq.br/6191585855165430", 
      foto: "imagens/ANTÔNIO QUIZ.jpg",
      email: "marcosmoreira@unb.br" 
    },
    { 
      nome: "Cesário Alvim Pereira Filho", 
      areas: ["Linguística", "Sociedade da Informação", "Multilinguismo", "Língua e cultura", "Políticas linguísticas ", 
      "Ciberespaço"], 
      // Sugeriu: Políticas linguísticas e ciberespaço!
      linguas: ["Espanhol"], 
      lattes: "http://lattes.cnpq.br/1267243719297020", 
      foto: "imagens/CESARIO QUIZ.jpg",
      email: "cesape@gmail.com"  
    },
    { 
      nome: "Charles Rocha Teixeira", // 2 Não respondeu o Forms!
      areas: ["Tradução"], 
      linguas: ["Francês"], 
      lattes: "http://lattes.cnpq.br/4928757305118743", 
      foto: "imagens/CHARLES QUIZ.jpg",
      email: "charlesrt2006@gmail.com"  
    },
    { 
      nome: "Clarissa Prado Marini", // 3 Não respondeu o Forms!
      areas: ["Linguística"], 
      linguas: ["Francês"], 
      lattes: "http://lattes.cnpq.br/4474411320594145", 
      foto: "imagens/CLARISSA QUIZ.jpg",
      email: "clarissamarini@gmail.com" 
    },
    { 
      nome: "Fernanda Alencar Pereira", 
      areas: ["Literatura", "Tradução","Tradução","Multilinguismo",
      "Língua e cultura","Literatura e outras artes","Histórias em quadrinhos", "Questões de gêner"], 
      linguas: ["Inglês", "Francês"], 
      lattes: "http://lattes.cnpq.br/6007880701572434", 
      foto: "imagens/FERNANDA QUIZ.jpg",
      email: "fapfernanda@gmail.com" 
    },
    { 
      nome: "Francisco Claudio Sampaio de Menezes", 
      areas: ["Linguística de Corpus", "Programação", "Sociedade da Informação", "Tradução", "Multilinguismo", 
      "Línguas indígenas", "Processamento da Linguagem Natural"], // Sugeriu: Processamento da Linguagem Natural
      linguas: ["Inglês", "Francês", "Espanhol"], 
      lattes: "http://lattes.cnpq.br/0356163607813759", 
      foto: "imagens/FRANCISCO QUIZ 2.jpg",
      email: "claudiomenezes@unb.br" 
    },
    { 
      nome: "Helena Santiago Vigata", 
      areas: ["Linguística", "Linguística de Corpus", "Acessibilidade", "Multilinguismo", "Língua e cultura", 
      "Literatura e outras artes"], 
      linguas: ["Inglês", "Francês"], 
      lattes: "http://lattes.cnpq.br/9968961018763883", 
      foto: "imagens/HELENA QUIZ.jpg",
      email: "hsantiago@unb.br" 
    },
    { 
      nome: "Marcos de Campos Carneiro", // 4 Não respondeu o Forms!
      areas: ["Linguística de Corpus"], 
      linguas: ["Francês"], 
      lattes: "http://lattes.cnpq.br/4189312022390606", 
      foto: "imagens/MARCOS QUIZ.jpg",
      email: "mdecampos@unb.br" 
    },
    { 
      nome: "Susana Martínez Martínez", 
      areas: ["Multilinguismo", "Línguas indígenas", "Sociedade da Informação", "Tradução", "Língua e cultura", 
      "Questões de gênero", "Interpretação", "Sociolinguística", "Sociologia da Linguagem", "Migrações internacionais"], 
      // Sugeriu: Interpretação, sociolinguística, sociologia da linguagem e migrações internacionais!
      linguas: ["Espanhol", "Inglês", "Francês","Português"], //Sugeriu: Português! 
      lattes: "http://lattes.cnpq.br/5780998946017708", 
      foto: "imagens/SUSANA QUIZ 1.jpg",
      email: "laresu@hotmail.com" 
    },
    { 
      nome: "Thiago Blanch Pires", // 5 Não respondeu o Forms!
      areas: ["Programação", "Multilinguísmo"], 
      linguas: ["Inglês"], 
      lattes: "http://lattes.cnpq.br/9911777987987166", 
      foto: "imagens/THIAGO QUIZ 1.jpg",
      email: "thiagocomaga@gmail.com" 
    },
    { 
      nome: "Virgílio Pereira de Almeida", 
      areas: ["Língua e cultura","Linguística", "Sociolinguística"], // Sugeriu: Sociolinguística!
      linguas: ["Inglês"], 
      lattes: "http://lattes.cnpq.br/5592207745863438", 
      foto: "imagens/VIRGÍLIO QUIZ.jpg",
      email: "virgilioalm@unb.br" 
    },

    // Adicione os outros professores aqui...
  ];

// Eventos para seleção de botões e submissão do formulário
document.querySelectorAll('.btn-interesse').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('selected');
  });
});

document.getElementById('quiz-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const selecionados = Array.from(document.querySelectorAll('.btn-interesse.selected')).map(button => button.dataset.value);

  const recomendados = professores.filter(professor => {
    const interseccaoAreas = professor.areas.filter(area => selecionados.includes(area));
    const interseccaoLinguas = professor.linguas.filter(lingua => selecionados.includes(lingua));
    return interseccaoAreas.length > 0 || interseccaoLinguas.length > 0;
  });

  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = "<h3>Professores Recomendados:</h3>";

  recomendados.forEach(prof => {
    const interseccaoAreas = prof.areas.filter(area => selecionados.includes(area)).join(', ');
    const interseccaoLinguas = prof.linguas.filter(lingua => selecionados.includes(lingua)).join(', ');

    resultadosDiv.innerHTML += `
      <div class="resultado-professor">
        <img src="${prof.foto || 'imagens/avatar-generico.jpg'}" alt="Foto de ${prof.nome}">
        <div>
          <p><strong>${prof.nome}</strong> (<a href="${prof.lattes}" target="_blank">Lattes</a>)</p>
          <p>Compartilha interesse no(s) idioma(s): ${interseccaoLinguas || 'Nenhum'}</p>
          <p>Compartilha interesse na(s) área(s): ${interseccaoAreas || 'Nenhuma'}</p>
          <p>E-mail: ${prof.email}</P>
        </div>
      </div>
    `;
  });
});

  /* Feedback
  document.getElementById('form-feedback').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const nomeProfessor = document.getElementById('nome-professor').value;
    const avaliacao = document.getElementById('avaliacao').value;
  
    alert(`Seu feedback foi enviado para o professor ${nomeProfessor}!`);
    event.target.reset();
  });*/
  function darkmode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  