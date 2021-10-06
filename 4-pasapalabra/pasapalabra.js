// status:
//  0: sin contestar
//  1: acierto
//  2: fallo

const questions = [
  // A
  [
    {
      letter: "a",
      answer: "antónimo",
      status: 0,
      question: "CON LA A. Palabra que significa lo contrario de una dada",
    },
    {
      letter: "a",
      answer: "área",
      status: 0,
      question:
        "CON LA A. La cantidad de espacio dentro de los límites de una figura plana",
    },
    {
      letter: "a",
      answer: "afluente",
      status: 0,
      question: "CON LA A. Río que desemboca en otro río",
    },
  ],

  // B
  [
    {
      letter: "b",
      answer: "bisílaba",
      status: 0,
      question: "CON LA B. Palabra que tiene dos sílabas",
    },
    {
      letter: "b",
      answer: "biografía",
      status: 0,
      question: "CON LA B. Narración de la vida de una persona",
    },
    {
      letter: "b",
      answer: "burgueses",
      status: 0,
      question:
        "CON LA B. Así se se llamaban en la Edad Moderna a los habitantes de las ciudades que es habían enriquecido con el comercio",
    },
  ],

  // C
  [
    {
      letter: "c",
      answer: "clima",
      status: 0,
      question:
        "CON LA C. El tiempo atmosférico que predomina en una zona a lo largo del tiempo",
    },
    {
      letter: "c",
      answer: "compás",
      status: 0,
      question:
        "CON LA C. Instrumento con dos brazos que dibuja arcos y circunferencias",
    },
    {
      letter: "c",
      answer: "calzada",
      status: 0,
      question:
        "CON LA C. Obra pública realizada por los romanos para mejorar la comunicación y el comercio",
    },
  ],

  // D
  [
    {
      letter: "d",
      answer: "devoción",
      status: 0,
      question: "CON LA D. Dedicación con fervor a obras de piedad y religión",
    },
    {
      letter: "d",
      answer: "diástole",
      status: 0,
      question: "CON LA D. Movimiento de relajación del corazón",
    },
    {
      letter: "d",
      answer: "diámetro",
      status: 0,
      question:
        "CON LA D. Línea que une dos puntos de una circunferencia pasando por el centro",
    },
  ],

  // E
  [
    {
      letter: "e",
      answer: "entera",
      status: 0,
      question:
        "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas",
    },
    {
      letter: "e",
      answer: "ebro",
      status: 0,
      question: "CON LA E. Río más largo de España",
    },
    {
      letter: "e",
      answer: "entrecot",
      status: 0,
      question:
        "CON LA E. Trozo de carne sacado de entre costilla y costilla de la res",
    },
  ],

  // F
  [
    {
      letter: "f",
      answer: "forestal",
      status: 0,
      question:
        "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos",
    },
    {
      letter: "f",
      answer: "fotosíntesis",
      status: 0,
      question:
        "CON LA F. Proceso metabólico por el cual las plantas transforman la materia con la energía de la luz",
    },
    {
      letter: "f",
      answer: "farhadi",
      status: 0,
      question:
        "CON LA F. Apellido del cineasta que dirigió la película El Viajante que obtuvo el Oscar a la mejor película de habla no inglesa en 2017",
    },
  ],

  // G
  [
    {
      letter: "g",
      answer: "gorgorito",
      status: 0,
      question:
        "CON LA G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar",
    },
    {
      letter: "g",
      answer: "gráfico",
      status: 0,
      question: "CON LA G. Representación de datos como líneas o barras",
    },
    {
      letter: "g",
      answer: "greenwich",
      status: 0,
      question: "CON LA G. Meridiano cero",
    },
  ],

  // H
  [
    {
      letter: "h",
      answer: "hidroavión",
      status: 0,
      question:
        "CON LA H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua",
    },
    {
      letter: "h",
      answer: "hemorragia",
      status: 0,
      question: "CON LA H. Flujo de sangre por rotura de vasos sanguíneos",
    },
    {
      letter: "h",
      answer: "hombrera",
      status: 0,
      question:
        "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros",
    },
  ],

  // I
  [
    {
      letter: "i",
      answer: "intuir",
      status: 0,
      question:
        "CON LA I. Percibir íntima o instantáneamente una idea o verdad tal como si la tuviera a la vista",
    },
    {
      letter: "i",
      answer: "inapetencia",
      status: 0,
      question: "CON LA I. Falta de gana de comer",
    },
    {
      letter: "i",
      answer: "isósceles",
      status: 0,
      question: "CON LA I. Triángulo con dos lados iguales",
    },
  ],

  // J
  [
    {
      letter: "j",
      answer: "jardinería",
      status: 0,
      question: "CON LA J. Arte y oficio del jardinero",
    },
    {
      letter: "j",
      answer: "jornada",
      status: 0,
      question: "CON LA J. Tiempo de duración del trabajo diario",
    },
    {
      letter: "j",
      answer: "júcar",
      status: 0,
      question: "CON LA J. Río que desemboca en la costa valenciana",
    },
  ],

  // K
  [
    {
      letter: "k",
      answer: "kilovatio",
      status: 0,
      question: "CON LA K. Medida de potencia de la energía eléctrica.",
    },
    {
      letter: "k",
      answer: "aizkorri",
      status: 0,
      question: "CONTIENE LA K. Sierra que destaca en los Montes Vascos",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
  ],

  // L
  [
    {
      letter: "l",
      answer: "lobera",
      status: 0,
      question: "CON LA L. Guarida de lobos",
    },
    {
      letter: "l",
      answer: "lermontov",
      status: 0,
      question:
        "CON LA L. Apellido del poeta ruso autor de la obra “La muerte del poeta” de 1837",
    },
    {
      letter: "l",
      answer: "litografía",
      status: 0,
      question: "CON LA L. Arte de dibujar o grabar en piedra",
    },
  ],

  // M
  [
    {
      letter: "m",
      answer: "mentira",
      status: 0,
      question:
        "CON LA M. Afirmación que una persona hace consciente de que no es verdad",
    },
    {
      letter: "m",
      answer: "morfología",
      status: 0,
      question:
        "CON LA M.  Parte de la gramática que estudia la estructura de las palabras y de sus elementos constitutivos",
    },
    {
      letter: "m",
      answer: "meridianos",
      status: 0,
      question: "CON LA M. Circunferencias imaginarias que pasan por los Polos",
    },
  ],

  // N
  [
    {
      letter: "n",
      answer: "nativo",
      status: 0,
      question:
        "CON LA N. Se aplica al que ha nacido en el lugar de que se trata",
    },
    {
      letter: "n",
      answer: "ninfas",
      status: 0,
      question:
        "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selvas",
    },
    {
      letter: "n",
      answer: "neumático",
      status: 0,
      question:
        "CON LA N. Pieza de caucho que se monta sobre la llanta de una rueda",
    },
  ],

  // Ñ
  [
    {
      letter: "ñ",
      answer: "hogaño",
      status: 0,
      question:
        "CONTIENE LA Ñ. En este año o en esta época, en oposición a antaño",
    },
    {
      letter: "ñ",
      answer: "patraña",
      status: 0,
      question: "CONTIENE LA Ñ. Mentira o noticia fabulosa de pura invención",
    },
    {
      letter: "ñ",
      answer: "miño",
      status: 0,
      question: "CONTIENE LA Ñ. Rio gallego",
    },
  ],

  // O
  [
    {
      letter: "o",
      answer: "ozono",
      status: 0,
      question:
        "CON LA O. Capa terrestre que protege a los seres vivos de las radiaciones solares",
    },
    {
      letter: "o",
      answer: "octógono",
      status: 0,
      question: "CON LA O. Polígono de ocho lados",
    },
    {
      letter: "o",
      answer: "omnívoro",
      status: 0,
      question: "CON LA O. Animal que come hierba y carne",
    },
  ],

  // P
  [
    {
      letter: "p",
      answer: "plotino",
      status: 0,
      question:
        "CON LA P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría",
    },
    {
      letter: "p",
      answer: "prioridad",
      status: 0,
      question:
        "CON LA P. Anterioridad de algo respecto de otra cosa en tiempo o en orden",
    },
    {
      letter: "p",
      answer: "pepa",
      status: 0,
      question: "CON LA P. Apodo con que se conoció a la constitución de 1812",
    },
  ],

  // Q
  [
    {
      letter: "q",
      answer: "chisquero",
      status: 0,
      question: "CONTIENE LA Q. Encendedor antiguo de bolsillo",
    },
    {
      letter: "q",
      answer: "branquia",
      status: 0,
      question:
        "CONTIENE LA Q. Órgano respiratorio de los peces formado por láminas o filamentos",
    },
    {
      letter: "q",
      answer: "trueque",
      status: 0,
      question:
        "CONTIENE LA Q. Intercambio de unos productos por otros sin utilizar monedas",
    },
  ],

  // R
  [
    {
      letter: "r",
      answer: "ráfaga",
      status: 0,
      question: "CON LA R. Viento fuerte, resentido y de corta duración",
    },
    {
      letter: "r",
      answer: "renard",
      status: 0,
      question:
        "CON LA R. Apellido del ingeniero francés que junto a Arthur C. Krebs, construyó el dirigible militar “La France” en 1884",
    },
    {
      letter: "r",
      answer: "retórica",
      status: 0,
      question:
        "CON LA R.  Arte de bien decir, de dar al lenguaje escrito o hablado eficacia bastante para deleitar, persuadir o conmover",
    },
  ],

  // S
  [
    {
      letter: "s",
      answer: "simple",
      status: 0,
      question: "CON LA S. Se aplica a lo que no tiene complicación",
    },
    {
      letter: "s",
      answer: "samba",
      status: 0,
      question:
        "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario",
    },
    {
      letter: "s",
      answer: "símbolo",
      status: 0,
      question: "CON LA S.  Representación gráfica invariable de un concepto.",
    },
  ],

  // T
  [
    {
      letter: "t",
      answer: "tanatorio",
      status: 0,
      question:
        "CON LA T.  Edificio en que son depositados los cadáveres durante las horas que preceden a su inhumación o cremación",
    },
    {
      letter: "t",
      answer: "tragaperras",
      status: 0,
      question:
        "CON LA T. Máquina de juegos de azar que funciona introduciendo monedas",
    },
    {
      letter: "t",
      answer: "terremoto",
      status: 0,
      question: "CON LA T. Seísmo o temblor de tierra",
    },
  ],

  // U
  [
    {
      letter: "u",
      answer: "uderzo",
      status: 0,
      question:
        "CON LA U. Apellido del dibujante y guionista francés autor de la serie Asterix",
    },
    {
      letter: "u",
      answer: "usurpar",
      status: 0,
      question:
        "CON LA U. Atribuirse o usar un cargo o título ajenos como si fueran propios",
    },
    {
      letter: "u",
      answer: "utopía",
      status: 0,
      question:
        "CON LA U.  Representación imaginativa de una sociedad futura de características favorecedoras del bien humano",
    },
  ],

  // V
  [
    {
      letter: "v",
      answer: "verde",
      status: 0,
      question:
        "CON LA V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda",
    },
    {
      letter: "v",
      answer: "vivienda",
      status: 0,
      question:
        "CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas",
    },
    {
      letter: "v",
      answer: "visigodo",
      status: 0,
      question: "CON LA V. Pueblo invasor que derrotó al imperio romano",
    },
  ],

  // W
  [
    {
      letter: "w",
      answer: "watson",
      status: 0,
      question: "CON LA W. Descubrió la molécula de ADN",
    },
    {
      letter: "w",
      answer: "waterpolo",
      status: 0,
      question:
        "CON LA W. Deporte que se practica en una piscina, consistente en meter el balón en la portería contraria",
    },
    {
      letter: "w",
      answer: "windsurf",
      status: 0,
      question:
        "CON LA W. Deporte que consiste en navegar de pie sobre una tabla con vela",
    },
  ],

  // X
  [
    {
      letter: "x",
      answer: "exégesis",
      status: 0,
      question:
        "CONTIENE LA X. Explicación o interpretación particularmente de los libros de la Biblia",
    },
    {
      letter: "x",
      answer: "oxford",
      status: 0,
      question:
        "CONTIENE LA X. Ciudad inglesa cuya Universidad compite cada año en una popular regata contra la Universidad de Cambridge",
    },
    {
      letter: "x",
      answer: "exilio",
      status: 0,
      question:
        "CONTIENE LA X. Pena que consiste en expulsar o hacer salir a una persona de un país o de un territorio",
    },
  ],

  // Y
  [
    {
      letter: "y",
      answer: "moncayo",
      status: 0,
      question:
        "CONTIENE LA Y. Nombre de la montaña más alta del sistema ibérico",
    },
    {
      letter: "y",
      answer: "leguleyo",
      status: 0,
      question:
        "CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente",
    },
    {
      letter: "y",
      answer: "yunque",
      status: 0,
      question: "CON LA Y. Hueso del oído medio",
    },
  ],

  // Z
  [
    {
      letter: "z",
      answer: "zodiacal",
      status: 0,
      question: "CON LA Z. Perteneciente o relativo al zodíaco",
    },
    {
      letter: "z",
      answer: "zarandeo",
      status: 0,
      question: "CON LA Z. Movimiento repetido y violento de un lado a otro",
    },
    {
      letter: "z",
      answer: "zoco",
      status: 0,
      question: "CON LA Z. Mercadillo tradicional de los árabes",
    },
  ],
];

let roscoActivo = [];
function getRandomQuestions() {
  questions.forEach((item) => {
    roscoActivo.push(item[Math.floor(Math.random() * item.length)]);
  });
}
getRandomQuestions();

const ranking = [
  { username: "Jugador 1", aciertos: 23 },
  { username: "Jugador 2", aciertos: 11 },
  { username: "Jugador 3", aciertos: 10 },
  { username: "Jugador 4", aciertos: 19 },
  { username: "Jugador 5", aciertos: 26 },
  { username: "Jugador 6", aciertos: 8 },
];

function pasapalabra() {
  // score
  let aciertos = 0;
  let fallos = 0;
  const pasapalabras = [];

  let ended = false;
  let username = window.prompt("Bienvenido/a a Pasapalabra. ¿Cómo te llamas?");
  if (username === "") {
    username = `Jugador ${ranking.length + 1}`;
  } else if (username === null) {
    window.alert("¡Hasta luego!");
    return;
  }
  window.alert(
    '¡Empecemos! Recuerda prestar atención a los acentos. Escribe "pasapalabra" para responder en la siguiente vuelta. Si deseas terminar la partida, escribe "end".'
  );

  while (roscoActivo.some((item) => item.status === 0) && ended === false) {
    for (let i = 0; i < roscoActivo.length; i++) {
      let answer = window.prompt(roscoActivo[i].question);
      while (answer === null) {
        const confirm = window.confirm(
          "¿Seguro que quieres irte? Perderás tu progreso."
        );
        if (confirm === true) {
          window.alert("¡Hasta luego!");
          ended = true;
          return;
        }
        answer = window.prompt(roscoActivo[i].question);
      }
      answer = answer.toLowerCase();
      if (answer === "pasapalabra") {
        pasapalabras.push(roscoActivo.indexOf(i));
      } else if (answer === "end") {
        window.alert(
          `¡Gracias por jugar! Has tenido ${aciertos} aciertos y ${fallos} fallos.`
        );
        ended = true;
        break;
      } else if (answer === roscoActivo[i].answer) {
        window.alert("¡Correcto!");
        aciertos++;
        roscoActivo[i].status = 1;
      } else if (answer !== roscoActivo[i].answer) {
        window.alert(
          `¡Error! La respuesta correcta es ${roscoActivo[i].answer}.`
        );
        fallos++;
        roscoActivo[i].status = 2;
      }
    }
    roscoActivo = roscoActivo.filter((item) => item.status === 0);
  }
  if (roscoActivo.every((item) => item.status !== 0)) {
    window.alert(
      `¡Gracias por jugar! Has tenido ${aciertos} aciertos y ${fallos} fallos. Puedes ver el ranking en consola.`
    );
    ended = true;
    ranking.push({ username, aciertos });
    ranking.sort((a, b) => b.aciertos - a.aciertos);
    ranking.every((item) => (item.posicion = ranking.indexOf(item) + 1));
    console.table(ranking);
  }
}

pasapalabra();
