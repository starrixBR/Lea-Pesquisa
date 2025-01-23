
// Professores com links, idiomas e áreas
const professores = [
    { 
      nome: "Alessandra Matias Querido", 
      areas: ["História em quadrinhos"], 
      linguas: ["Inglês"], 
      lattes: "http://lattes.cnpq.br/9582760816449975", 
      foto: "imagens/ALESSANDRA QUIZ.jpg",
      email: "alequerido@gmail.com"
    },
    { 
      nome: "Antônio Marcos Moreira", 
      areas: ["Questões de gênero"], 
      linguas: ["Francês"], 
      lattes: "http://lattes.cnpq.br/6191585855165430", 
      foto: "imagens/ANTÔNIO QUIZ.jpg",
      email: "marcosmoreira@unb.br" 
    },
    { 
      nome: "Cesário Alvim Pereira Filho", 
      areas: ["Linguística"], 
      linguas: ["Espanhol"], 
      lattes: "http://lattes.cnpq.br/1267243719297020", 
      foto: "imagens/CESARIO QUIZ.jpg",
      email: "cesape@gmail.com"  
    },
    { 
      nome: "Charles Rocha Teixeira", 
      areas: ["Tradução"], 
      linguas: ["Francês"], 
      lattes: "http://lattes.cnpq.br/4928757305118743", 
      foto: "imagens/CHARLES QUIZ.jpg",
      email: "charlesrt2006@gmail.com"  
    },
    { 
      nome: "Clarissa Prado Marini", 
      areas: ["Linguística"], 
      linguas: ["Francês"], 
      lattes: "http://lattes.cnpq.br/4474411320594145", 
      foto: "imagens/CLARISSA QUIZ.jpg",
      email: "clarissamarini@gmail.com" 
    },
    { 
      nome: "Fernanda Alencar Pereira", 
      areas: ["Literatura"], 
      linguas: ["Inglês"], 
      lattes: "http://lattes.cnpq.br/6007880701572434", 
      foto: "imagens/FERNANDA QUIZ.jpg",
      email: "fapfernanda@gmail.com" 
    },
    { 
      nome: "Helena Santiago Vigata", 
      areas: ["Programação"], 
      linguas: ["Espanhol"], 
      lattes: "http://lattes.cnpq.br/9968961018763883", 
      foto: "imagens/HELENA QUIZ.jpg",
      email: "hsantiago@unb.br" 
    },
    { 
      nome: "Marcos de Campos Carneiro", 
      areas: ["Linguística de Corpus"], 
      linguas: ["Francês"], 
      lattes: "http://lattes.cnpq.br/4189312022390606", 
      foto: "imagens/MARCOS QUIZ.jpg",
      email: "mdecampos@unb.br" 
    },
    { 
      nome: "Susana Martínez Martínez", 
      areas: ["Multilinguismo", "Línguas indígenas"], 
      linguas: ["Espanhol"], 
      lattes: "http://lattes.cnpq.br/5780998946017708", 
      foto: "imagens/SUSANA QUIZ 1.jpg",
      email: "laresu@hotmail.com" 
    },
    { 
      nome: "Thiago Blanch Pires", 
      areas: ["Programação", "Multilinguísmo"], 
      linguas: ["Inglês"], 
      lattes: "http://lattes.cnpq.br/9911777987987166", 
      foto: "imagens/THIAGO QUIZ 1.jpg",
      email: "thiagocomaga@gmail.com" 
    },
    { 
      nome: "Virgílio Pereira de Almeida", 
      areas: ["Língua e cultura"], 
      linguas: ["Inglês"], 
      lattes: "http://lattes.cnpq.br/5592207745863438", 
      foto: "imagens/VIRGÍLIO QUIZ.jpg",
      email: "virgilioalm@unb.br" 
    },
    { 
      nome: "Alessandra Fernandes Barbosa", 
      areas: ["Língua e cultura"], 
      linguas: ["Alemão"], 
      lattes: "http://lattes.cnpq.br/3065127356052281", 
      foto: "imagens/ADRIANA QUIZ.jpg",
      email: "adriana.barbosa@unb.br" 
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
