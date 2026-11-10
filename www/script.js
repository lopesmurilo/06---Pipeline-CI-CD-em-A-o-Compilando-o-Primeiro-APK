const artists = [
  {
    name: "MC Marcinho",
    style: "Funk melody",
    icon: "🎤",
    text: "Nome marcante do funk melody, conhecido por canções românticas e pela influência na cena carioca."
  },

  {
    name: "MC Sapão",
    style: "Funk carioca",
    icon: "🎙️",
    text: "Artista associado à cena do funk carioca e aos grandes bailes do Rio de Janeiro."
  },

  {
    name: "MC Guimê",
    style: "Funk ostentação",
    icon: "💎",
    text: "Um dos nomes que ajudaram a popularizar o funk ostentação e sua estética na década de 2010."
  },

  {
    name: "MC Livinho",
    style: "Funk paulista",
    icon: "🎧",
    text: "Artista de destaque na cena paulista, transitando por diferentes sonoridades do funk."
  },

  {
    name: "Ludmilla",
    style: "Funk / Pop",
    icon: "⭐",
    text: "Começou sua trajetória no funk e ampliou sua atuação para o pop e outros gêneros."
  },

  {
    name: "Anitta",
    style: "Funk / Pop",
    icon: "🔥",
    text: "Artista que levou referências do funk para grandes públicos no Brasil e no exterior."
  },

  {
    name: "DJ Marlboro",
    style: "Funk carioca",
    icon: "🎛️",
    text: "DJ e produtor fundamental para a divulgação e consolidação do funk carioca."
  },

  {
    name: "MC Daleste",
    style: "Funk paulista",
    icon: "🎤",
    text: "Figura importante do funk paulista e do processo de expansão do gênero na internet."
  },

  {
    name: "MC Hariel",
    style: "Funk consciente",
    icon: "🎙️",
    text: "Conhecido por letras que abordam vivências, conquistas e questões sociais."
  }
];


// ========================================
// ESTILOS DE FUNK
// ========================================

const styles = [
  {
    name: "Funk carioca",
    icon: "🌴",
    text: "Desenvolvido principalmente no Rio de Janeiro, com forte relação com os bailes e a cultura das comunidades."
  },

  {
    name: "Funk paulista",
    icon: "🏙️",
    text: "Cena diversa de São Paulo que ganhou força com diferentes produtores, MCs e batidas."
  },

  {
    name: "Funk ostentação",
    icon: "💎",
    text: "Vertente que ganhou destaque ao abordar conquistas, consumo, estilo e ascensão social."
  },

  {
    name: "Mandelão",
    icon: "🔊",
    text: "Sonoridade marcada por graves fortes, batidas intensas e produção voltada para pistas e bailes."
  },

  {
    name: "Funk melody",
    icon: "💜",
    text: "Vertente que mistura elementos dançantes com melodias e temáticas românticas."
  },

  {
    name: "Funk consciente",
    icon: "✊",
    text: "Usa o funk para narrar vivências, desigualdades, cotidiano, sonhos e questões sociais."
  }
];


// ========================================
// LINHA DO TEMPO
// ========================================

const timeline = [

  [
    "Décadas de 1970–80",
    "As referências de soul, funk e cultura dos bailes circulam no Brasil e influenciam novas festas e cenas musicais."
  ],

  [
    "Década de 1990",
    "O funk carioca ganha identidade própria e se fortalece por meio dos bailes, DJs e MCs."
  ],

  [
    "Anos 2000",
    "O gênero cresce para além dos bailes e conquista rádio, televisão e novos públicos."
  ],

  [
    "Anos 2010",
    "Funk ostentação e cenas paulistas ganham enorme visibilidade, impulsionadas pela internet."
  ],

  [
    "Anos 2020",
    "Plataformas digitais aceleram lançamentos, colaborações e novas vertentes, levando o funk a públicos internacionais."
  ]
];


// ========================================
// NAVEGAÇÃO
// ========================================

function showPage(page) {

  // Esconde todas as páginas
  document.querySelectorAll(".page").forEach(function(element) {
    element.classList.add("hide");
  });


  // Mostra a página selecionada
  const selectedPage = document.getElementById("page-" + page);

  if (selectedPage) {
    selectedPage.classList.remove("hide");
  }


  // Remove destaque do menu
  document.querySelectorAll(".nav").forEach(function(element) {
    element.classList.remove("active-nav");
  });


  // Adiciona destaque no menu atual
  const currentNav = document.querySelector(
    `[data-nav="${page}"]`
  );

  if (currentNav) {
    currentNav.classList.add("active-nav");
  }


  // Volta para o topo
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  // Carrega conteúdos específicos
  if (page === "artists") {
    renderArtists();
  }

  if (page === "styles") {
    renderStyles();
  }

  if (page === "timeline") {
    renderTimeline();
  }

  if (page === "quiz") {
    renderQuiz();
  }
}


// ========================================
// MENU MOBILE
// ========================================

function toggleMobileMenu() {

  const menu = document.getElementById("mobileMenu");

  if (menu) {
    menu.classList.toggle("hide");
  }
}


// ========================================
// ARTISTAS
// ========================================

function renderArtists() {

  const searchInput =
    document.getElementById("artistSearch");

  const searchTerm =
    searchInput
      ? searchInput.value.toLowerCase()
      : "";


  const filteredArtists = artists.filter(function(artist) {

    const information =
      `${artist.name} ${artist.style} ${artist.text}`
      .toLowerCase();

    return information.includes(searchTerm);

  });


  const artistGrid =
    document.getElementById("artistGrid");


  if (!artistGrid) {
    return;
  }


  if (filteredArtists.length === 0) {

    artistGrid.innerHTML = `
      <div
        class="sm:col-span-2
               lg:col-span-3
               glass rounded-2xl
               p-8 text-center
               text-zinc-500"
      >
        Nenhum artista encontrado.
      </div>
    `;

    return;
  }


  artistGrid.innerHTML = filteredArtists.map(function(artist) {

    return `
      <article
        class="glass rounded-3xl
               p-5 card-hover"
      >

        <div
          class="h-40 rounded-2xl
                 bg-gradient-to-br
                 from-violet/30
                 via-pink/15
                 to-lime/10
                 grid place-items-center
                 text-6xl"
        >
          ${artist.icon}
        </div>


        <div
          class="flex justify-between
                 gap-3 mt-5"
        >

          <div>

            <h3 class="font-black text-xl">
              ${artist.name}
            </h3>

            <span
              class="inline-block mt-1
                     text-xs text-lime
                     bg-lime/10
                     px-2 py-1
                     rounded-full"
            >
              ${artist.style}
            </span>

          </div>


          <button
            onclick="toggleFavorite('${artist.name}')"
            class="text-xl
                   hover:scale-110
                   transition"
            title="Favoritar"
          >
            ${isFavorite(artist.name) ? "♥" : "♡"}
          </button>

        </div>


        <p
          class="text-sm text-zinc-500
                 leading-6 mt-4"
        >
          ${artist.text}
        </p>

      </article>
    `;

  }).join("");
}


// ========================================
// ESTILOS
// ========================================

function renderStyles() {

  const styleGrid =
    document.getElementById("styleGrid");


  if (!styleGrid) {
    return;
  }


  styleGrid.innerHTML = styles.map(function(style) {

    return `
      <article
        class="glass rounded-3xl
               p-6 card-hover"
      >

        <div
          class="w-14 h-14
                 rounded-2xl
                 bg-white/5
                 grid place-items-center
                 text-3xl"
        >
          ${style.icon}
        </div>


        <h3
          class="text-xl font-black mt-5"
        >
          ${style.name}
        </h3>


        <p
          class="text-sm text-zinc-500
                 leading-6 mt-3"
        >
          ${style.text}
        </p>

      </article>
    `;

  }).join("");
}


// ========================================
// LINHA DO TEMPO
// ========================================

function renderTimeline() {

  const timelineList =
    document.getElementById("timelineList");


  if (!timelineList) {
    return;
  }


  timelineList.innerHTML =
    timeline.map(function(item) {

      return `
        <article
          class="relative pl-10"
        >

          <span
            class="absolute left-0
                   top-1.5 w-7 h-7
                   rounded-full
                   bg-ink
                   border-4
                   border-violet
                   shadow-neon"
          ></span>


          <div
            class="glass
                   rounded-2xl
                   p-5"
          >

            <span
              class="text-lime
                     font-black text-sm"
            >
              ${item[0]}
            </span>


            <p
              class="text-zinc-400
                     leading-6 mt-2"
            >
              ${item[1]}
            </p>

          </div>

        </article>
      `;

    }).join("");
}


// ========================================
// FAVORITOS
// ========================================

function getFavorites() {

  try {

    return JSON.parse(
      localStorage.getItem(
        "funkbr-favorites"
      ) || "[]"
    );

  } catch (error) {

    return [];

  }
}


function isFavorite(name) {

  const favorites =
    getFavorites();

  return favorites.includes(name);
}


function toggleFavorite(name) {

  let favorites =
    getFavorites();


  if (favorites.includes(name)) {

    favorites =
      favorites.filter(function(item) {
        return item !== name;
      });

  } else {

    favorites.push(name);

  }


  localStorage.setItem(
    "funkbr-favorites",
    JSON.stringify(favorites)
  );


  renderArtists();
}


// ========================================
// QUIZ
// ========================================

const questions = [

  {
    q: "Qual cidade teve papel central no desenvolvimento do funk carioca?",

    options: [
      "Rio de Janeiro",
      "Curitiba",
      "Recife",
      "Brasília"
    ],

    answer: 0
  },


  {
    q: "Qual vertente ficou conhecida por temas ligados a conquistas e consumo?",

    options: [
      "Funk melody",
      "Funk ostentação",
      "Funk consciente",
      "Funk rural"
    ],

    answer: 1
  },


  {
    q: "Qual recurso ajudou a acelerar a circulação do funk nos anos 2010 e 2020?",

    options: [
      "Máquinas de escrever",
      "Internet e plataformas digitais",
      "Cartas",
      "Rádio AM exclusivamente"
    ],

    answer: 1
  },


  {
    q: "O que caracteriza o funk consciente?",

    options: [
      "Somente letras românticas",
      "Narrativas sobre vivências e questões sociais",
      "Apenas músicas instrumentais",
      "Ausência de batida"
    ],

    answer: 1
  },


  {
    q: "O mandelão é conhecido principalmente por:",

    options: [
      "Graves fortes e batidas intensas",
      "Ser exclusivamente acústico",
      "Não usar produção eletrônica",
      "Ser uma dança clássica"
    ],

    answer: 0
  }

];


let quizIndex = 0;
let quizScore = 0;


// ========================================
// RENDERIZAR QUIZ
// ========================================

function renderQuiz() {

  const quizBox =
    document.getElementById("quizBox");


  if (!quizBox) {
    return;
  }


  // Quiz finalizado
  if (quizIndex >= questions.length) {

    quizBox.innerHTML = `

      <div class="text-center">

        <div class="text-6xl">
          🏆
        </div>


        <p
          class="text-lime
                 font-black mt-5"
        >
          QUIZ FINALIZADO
        </p>


        <h3
          class="text-4xl
                 font-black mt-2"
        >
          ${quizScore}/${questions.length}
        </h3>


        <p
          class="text-zinc-400
                 mt-3"
        >

          ${
            quizScore === questions.length

              ? "Mandou muito! Você conhece bastante o universo do funk."

              : quizScore >= 3

              ? "Boa! Você já conhece bastante coisa sobre o gênero."

              : "Você pode explorar a História e os Estilos e tentar novamente."
          }

        </p>


        <button
          onclick="restartQuiz()"
          class="mt-7
                 px-6 py-3
                 rounded-xl
                 bg-lime
                 text-black
                 font-black"
        >
          Tentar novamente
        </button>

      </div>

    `;

    return;
  }


  const question =
    questions[quizIndex];


  quizBox.innerHTML = `

    <div
      class="flex
             justify-between
             text-sm mb-4"
    >

      <span class="text-zinc-500">
        Pergunta ${quizIndex + 1}
        de ${questions.length}
      </span>


      <span
        class="text-lime
               font-bold"
      >
        ${quizScore} acertos
      </span>

    </div>


    <div
      class="h-2 bg-white/5
             rounded-full
             overflow-hidden
             mb-8"
    >

      <div
        class="h-full
               bg-gradient-to-r
               from-lime to-pink
               rounded-full"
        style="
          width: ${
            ((quizIndex) / questions.length) * 100
          }%;
        "
      ></div>

    </div>


    <h3
      class="text-2xl
             sm:text-3xl
             font-black
             leading-tight"
    >
      ${question.q}
    </h3>


    <div
      class="grid gap-3 mt-7"
    >

      ${question.options.map(function(option, index) {

        return `

          <button
            onclick="answerQuiz(${index})"
            class="quiz-option
                   text-left
                   p-4 rounded-xl
                   bg-white/5
                   border border-white/10
                   hover:border-violet
                   hover:bg-violet/10
                   transition"
          >

            ${String.fromCharCode(65 + index)}.
            ${option}

          </button>

        `;

      }).join("")}

    </div>

  `;
}


// ========================================
// RESPONDER QUIZ
// ========================================

function answerQuiz(index) {

  const question =
    questions[quizIndex];


  if (index === question.answer) {
    quizScore++;
  }


  quizIndex++;


  renderQuiz();
}


// ========================================
// REINICIAR QUIZ
// ========================================

function restartQuiz() {

  quizIndex = 0;
  quizScore = 0;

  renderQuiz();
}


// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    showPage("home");

  }
);