// Professores iniciais com links, idiomas e áreas
const professores = [
    { 
      nome: "Alessandra Matias Querido", 
      areas: ["História em quadrinhos"], 
      linguas: ["Inglês"], 
      lattes: "http://lattes.cnpq.br/9582760816449975", 
      foto: "imagens/ALESSANDRA QUIZ.jpg" 
    },
    { 
      nome: "Antônio Marcos Moreira", 
      areas: ["Questões de gênero"], 
      linguas: ["Francês"], 
      lattes: "#", 
      foto: "imagens/ANTÔNIO QUIZ.jpg" 
    },
    { 
      nome: "Cesário Alvim Pereira Filho", 
      areas: ["Linguística"], 
      linguas: ["Espanhol"], 
      lattes: "#", 
      foto: "imagens/CESARIO QUIZ.jpg" 
    },
    { 
      nome: "Charles Rocha Teixeira", 
      areas: ["Tradução"], 
      linguas: ["Francês"], 
      lattes: "#", 
      foto: "imagens/CHARLES QUIZ.jpg" 
    },
    { 
      nome: "Clarissa Prado Marini", 
      areas: ["Linguística"], 
      linguas: ["Francês"], 
      lattes: "#", 
      foto: "imagens/CLARISSA QUIZ.jpg" 
    },
    { 
      nome: "Fernanda Alencar Pereira", 
      areas: ["Literatura"], 
      linguas: ["Inglês"], 
      lattes: "#", 
      foto: "imagens/FERNANDA QUIZ.jpg" 
    },
    { 
      nome: "Helena Santiago Vigata", 
      areas: ["Programação"], 
      linguas: ["Espanhol"], 
      lattes: "#", 
      foto: "imagens/HELENA QUIZ.jpg" 
    },
    { 
      nome: "Marcos de Campos Carneiro", 
      areas: ["Linguística de Corpus"], 
      linguas: ["Francês"], 
      lattes: "#", 
      foto: "imagens/MARCOS QUIZ.jpg" 
    },
    { 
      nome: "Susana Martínez Martínez", 
      areas: ["Multilinguísmo", "Línguas indígenas"], 
      linguas: ["Espanhol"], 
      lattes: "#", 
      foto: "imagens/SUSANA QUIZ 1.jpg" 
    },
    { 
      nome: "Thiago Blanch Pires", 
      areas: ["Programação", "Multilinguísmo"], 
      linguas: ["Inglês"], 
      lattes: "#", 
      foto: "imagens/THIAGO QUIZ 1.jpg" 
    },
    { 
      nome: "Virgílio Pereira de Almeida", 
      areas: ["Língua e cultura"], 
      linguas: ["Inglês"], 
      lattes: "#", 
      foto: "imagens/VIRGÍLIO QUIZ.jpg" 
    },
    { 
      nome: "Alessandra Fernandes Barbosa", 
      areas: ["Língua e cultura"], 
      linguas: ["Alemão"], 
      lattes: "#", 
      foto: "imagens/ALESSANDRA FERNANDES QUIZ.jpg" 
    },
    // Adicione os outros professores aqui...
  ];
  
  // Quiz
  document.getElementById('quiz-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const selecionados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(el => el.value);
  
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
