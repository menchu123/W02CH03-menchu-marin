const  questions = [
    //A
    [{ letter: "a", answer: "antónimo", status: 0, question: "Palabra que significa lo contrario de una dada"},
    { letter: "a", answer: "área", status: 0, question: "La cantidad de espacio dentro de los límites de una figura plana"},
    { letter: "a", answer: "afluente", status: 0, question: "Río que desemboca en otro río"},
    { letter: "a", answer: "arcilla", status: 0, question: "Tierra fina, formada por silicato de aluminio, que al humedecerse se hace moldeable y se emplea en cerámica"}],


    //B
    [{ letter: "b", answer: "bisílaba", status: 0, question: "Palabra que tiene dos sílabas"},
    { letter: "b", answer: "biografía", status: 0, question: "Narración de la vida de una persona"},
    { letter: "b", answer: "burgueses", status: 0, question: "Así se se llamaban en la Edad Moderna a los habitantes de las ciudades que se habían enriquecido con el comercio"},
    { letter: "b", answer: "babucha", status: 0, question: "Calzado ligero y sin talón, usado principalmente en países orientales y del norte de África"}],

    //C
    [{ letter: "c", answer: "clima", status: 0, question: "El tiempo atmosférico que predomina en una zona a lo largo del tiempo"},
    { letter: "c", answer: "compás", status: 0, question: "Instrumento con dos brazos que dibuja arcos y circunferencias"},
    { letter: "c", answer: "calzada", status: 0, question: "Obra pública realizada por los romanos para mejorar la comunicación y el comercio"},
    { letter: "c", answer: "cúpula", status: 0, question: "Bóveda en forma de una media esfera u otra aproximada con que suele cubrirse todo un edificio o parte de él"}],

    //D
    [{ letter: "d", answer: "devoción", status: 0, question: "Dedicación con fervor a obras de piedad y religión"},
    { letter: "d", answer: "diástole", status: 0, question: "Movimiento de relajación del corazón"},
    { letter: "d", answer: "diámetro", status: 0, question: "Línea que une dos puntos de una circunferencia pasando por el centro"},
    { letter: "d", answer: "delineante", status: 0, question: "Dibujante que traza planos o proyectos ideados por otro"}],

    //E
    [{ letter: "e", answer: "entera", status: 0, question: "Se dice de la leche que conserva toda la grasa y sustancias nutritivas"},
    { letter: "e", answer: "ebro", status: 0, question: "Río más largo de España"},
    { letter: "e", answer: "entrecot", status: 0, question: "Trozo de carne sacado de entre costilla y costilla de la res"}],

    //F
    [{ letter: "f", answer: "forestal", status: 0, question: "Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos"},
    { letter: "f", answer: "fotosíntesis", status: 0, question: "Proceso metabólico por el cual las plantas transforman la materia gracias a la energía de la luz"},
    { letter: "f", answer: "farhadi", status: 0, question: "Apellido del cineasta que dirigió la película El Viajante que obtuvo el Oscar a la mejor película de habla no inglesa en 2017"}],


    //G
    [{ letter: "g", answer: "gorgorito", status: 0, question: "Coloquialmente quiebro que se hace  ganta al cantar"},
    { letter: "g", answer: "gráfico", status: 0, question: "Representación de datos como líneas o barras"},
    { letter: "g", answer: "greenwich", status: 0, question: "Meridiano cero"}],


    //Hcomienzo
    [{ letter: "h", answer: "hidroavión", status: 0, question: "Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua"},
    { letter: "h", answer: "hemorragia", status: 0, question: "Flujo de sangre por rotura de vasos sanguíneos"},
    { letter: "h", answer: "hombrera", status: 0, question: "Adorno especial de los vestidos en la parte correspondiente a los hombros"}],

    //I
    [{ letter: "i", answer: "intuir", status: 0, question: "Percibir íntima o instantáneamente una idea o verdad tal como si la tuviera a la vista"},
    { letter: "i", answer: "inapetencia", status: 0, question: "Falta de gana de comer"},
    { letter: "i", answer: "isósceles", status: 0, question: "Triángulo con dos lados iguales"}],

    //J
    [{ letter: "j", answer: "jardinería", status: 0, question: "Arte y oficio del jardinero"},
    { letter: "j", answer: "jornada", status: 0, question: "Tiempo de duración del trabajo diario"},
    { letter: "j", answer: "júcar", status: 0, question: "Río que desemboca en la costa valenciana"}],

    //K
    [{ letter: "k", answer: "kilovatio", status: 0, question: "Medida de potencia de la energía eléctrica."},
    { letter: "k", answer: "aizkorri", status: 0, question: "Sierra que destaca en los Montes Vascos", contiene: true},
    { letter: "k", answer: "kamikaze", status: 0, question: "Persona que se juega la vida realizando una acción temeraria"}],

    //L
    [{ letter: "l", answer: "lobera", status: 0, question: "Guarida de lobos"},
    { letter: "l", answer: "lermontov", status: 0, question: "Apellido del poeta ruso autor de la obra “La muerte del poeta” de 1837"},
    { letter: "l", answer: "litografía", status: 0, question: "Arte de dibujar o grabar en piedra"}],

    //M
    [{ letter: "m", answer: "mentira", status: 0, question: "Afirmación que una persona hace consciente de que no es verdad"},
    { letter: "m", answer: "morfología", status: 0, question: " Parte de la gramática que estudia la estructura de las palabras y de sus elementos constitutivos"},
    { letter: "m", answer: "meridianos", status: 0, question: "Circunferencias imaginarias que pasan por los Polos"}],

    //N
    [{ letter: "n", answer: "nativo", status: 0, question: "Se aplica al que ha nacido en el lugar de que se trata"},
    { letter: "n", answer: "ninfas", status: 0, question: "Cada una de las fabulosas deidades de las aguas, bosques o selvas"},
    { letter: "n", answer: "neumático", status: 0, question: "Pieza de caucho que se monta sobre la llanta de una rueda"}],

    //Ñ
    [{ letter: "ñ", answer: "hogaño", status: 0, question: "En este año o en esta época, en oposición a antaño", contiene: true},
    { letter: "ñ", answer: "patraña", status: 0, question: "Mentira o noticia fabulosa de pura invención", contiene: true},
    { letter: "ñ", answer: "miño", status: 0, question: "Rio gallego", contiene: true}],

    //O
    [{ letter: "o", answer: "ozono", status: 0, question: "Capa terrestre que protege a los seres vivos de las radiaciones solares"},
    { letter: "o", answer: "octógono", status: 0, question: "Polígono de ocho lados"},
    { letter: "o", answer: "omnívoro", status: 0, question: "Animal que come hierba y carne"}],

    //P
    [{ letter: "p", answer: "plotino", status: 0, question: "Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría"},
    { letter: "p", answer: "prioridad", status: 0, question: "Anterioridad de algo respecto de otra cosa en tiempo o en orden"},
    { letter: "p", answer: "pepa", status: 0, question: "Apodo con que se conoció a la constitución de 1812"}],

    //Q
    [{ letter: "q", answer: "chisquero", status: 0, question: "Encendedor antiguo de bolsillo", contiene: true},
    { letter: "q", answer: "branquia", status: 0, question: "Órgano respiratorio de los peces formado por láminas o filamentos", contiene: true},
    { letter: "q", answer: "trueque", status: 0, question: "Intercambio de unos productos por otros sin utilizar monedas", contiene: true}],

    //R
    [{ letter: "r", answer: "ráfaga", status: 0, question: "Viento fuerte, resentido y de corta duración"},
    { letter: "r", answer: "renard", status: 0, question: "Apellido del ingeniero francés que junto a Arthur C. Krebs, construyó el dirigible militar “La France” en 1884"},
    { letter: "r", answer: "retórica", status: 0, question: " Arte de bien decir, de dar al lenguaje escrito o hablado eficacia bastante para deleitar, persuadir o conmover"}],

    //S
    [{ letter: "s", answer: "simple", status: 0, question: "Se aplica a lo que no tiene complicación"},
    { letter: "s", answer: "samba", status: 0, question: "Danza popular brasileña de influencia africana cantada de compás binario"},
    { letter: "s", answer: "símbolo", status: 0, question: " Representación gráfica invariable de un concepto."}],

    //T
    [{ letter: "t", answer: "tanatorio", status: 0, question: " Edificio en que son depositados los cadáveres durante las horas que preceden a su inhumación o cremación"},
    { letter: "t", answer: "tragaperras", status: 0, question: "Máquina de juegos de azar que funciona introduciendo monedas"},
    { letter: "t", answer: "terremoto", status: 0, question: "Seísmo o temblor de tierra"}],

    //U
    [{ letter: "u", answer: "uderzo", status: 0, question: "Apellido del dibujante y guionista francés autor de la serie Asterix"},
    { letter: "u", answer: "usurpar", status: 0, question: "Atribuirse o usar un cargo o título ajenos como si fueran propios"},
    { letter: "u", answer: "utopía", status: 0, question: " Representación imaginativa de una sociedad futura de características favorecedoras del bien humano"}],

    //V
    [{ letter: "v", answer: "verde", status: 0, question: "Se aplica el color perfectamente al de la hierba fresca o la esmeralda"},
    { letter: "v", answer: "vivienda", status: 0, question: "Lugar cerrado y cubierto construido para ser habitado por personas"},
    { letter: "v", answer: "visigodo", status: 0, question: "Pueblo invasor que derrotó al imperio romano"}],

    //W
    [{ letter: "w", answer: "watson", status: 0, question: "Descubrió la molécula de ADN"},
    { letter: "w", answer: "waterpolo", status: 0, question: "Deporte que se practica en una piscina, consistente en meter el balón en la portería contraria"},
    { letter: "w", answer: "windsurf", status: 0, question: "Deporte que consiste en navegar de pie sobre una tabla con vela"}],

    //X
    [{ letter: "x", answer: "exégesis", status: 0, question: "Explicación o interpretación particularmente de los libros de la Biblia", contiene: true},
    { letter: "x", answer: "oxford", status: 0, question: "Ciudad inglesa cuya Universidad compite cada año en una popular regata contra la Universidad de Cambridge", contiene: true},
    { letter: "x", answer: "exilio", status: 0, question: "Pena que consiste en expulsar o hacer salir a una persona de un país o de un territorio", contiene: true}],

    //Y
    [{ letter: "y", answer: "moncayo", status: 0, question: "Nombre de la montaña más alta del sistema ibérico", contiene: true},
    { letter: "y", answer: "leguleyo", status: 0, question: "Persona que aplica el derecho sin rigor y desenfadadamente", contiene: true},
    { letter: "y", answer: "yunque", status: 0, question: "Hueso del oído medio"}],

    //Z
    [{ letter: "z", answer: "zodiacal", status: 0, question: "Perteneciente o relativo al zodíaco"}, 
    { letter: "z", answer: "zarandeo", status: 0, question: "Movimiento repetido y violento de un lado a otro"}, 
    { letter: "z", answer: "zoco", status: 0, question: "Mercadillo tradicional de los árabes"}]
];

let roscoActivo = [];
function getRandomQuestions() {
    questions.forEach(item => {
        roscoActivo.push(item[Math.floor(Math.random()*item.length)]);
    });
};
getRandomQuestions();

const usernameInput = document.querySelector('.username');
const botonEmpezar = document.querySelector('.empezar');
const pregunta = document.querySelector('.pregunta');
const botonResponder = document.querySelector('.responder');
const botonPasapalabra = document.querySelector('.pasapalabra');
const respuesta = document.querySelector('.respuesta-user');
const tituloLetra = document.querySelector('.titulo-letra');
const popupCorrecto = document.querySelector('.popup-correcto');
const popupError = document.querySelector('.popup-error');
const popupErrorContenido = document.querySelector('.contenido-error');
const popupFin = document.querySelector('.popup-fin');
const popupFinContenido = document.querySelector('.texto-fin');
const popupStart = document.querySelector('.popup-start');
const popupStartContenido = document.querySelector('.contenido-start');
const form = document.querySelector('.form');

const containerFallos = document.querySelector('.fallos');
const containerRestantes = document.querySelector('.restantes');
const contadorFallos = document.querySelector('.contador-fallos');
const contadorRestantes = document.querySelector('.contador-restantes');
const contadorAciertos = document.querySelector('.contador-aciertos');
const temporizador = document.querySelector('.temporizador');
const again =document.querySelector('.again');

popupStart.style.display = 'flex';
containerFallos.style.display = 'none';
containerRestantes.style.display = 'none';
contadorAciertos.style.display = 'none';
temporizador.style.display = 'none';
contadorRestantes.innerHTML = 27;

let username;
let aciertos = 0;
let fallos = 0;
let pasapalabras = [];

let ended = false;

pregunta.textContent = roscoActivo[0].question;
let currentQuestionIndex = roscoActivo.map(e => e.question).indexOf(pregunta.textContent);

const activarLetra = (currentQuestionIndex) => {
    let currentLetter = document.getElementById(roscoActivo[currentQuestionIndex].letter);
    currentLetter.classList.add('letra-activa');
};

const desactivarLetra = (currentQuestionIndex) => {
    let currentLetter = document.getElementById(roscoActivo[currentQuestionIndex - 1].letter);
    currentLetter.classList.remove('letra-activa');
};

const desactivarTodasLetras = () => {
    for (let i = 0; i < roscoActivo.length; i++) {
        let letter = document.getElementById(roscoActivo[i].letter);
        letter.classList.remove('letra-activa', 'letra-error', 'letra-correcta');
    };
};

const errorLetra = (currentQuestionIndex) => {
    let currentLetter = document.getElementById(roscoActivo[currentQuestionIndex].letter);
    currentLetter.classList.remove('letra-activa');
    currentLetter.classList.add('letra-error');
};

const correctaLetra = (currentQuestionIndex) => {
    let currentLetter = document.getElementById(roscoActivo[currentQuestionIndex].letter);
    currentLetter.classList.remove('letra-activa');
    currentLetter.classList.add('letra-correcta');
};

const rosco = () => {
    pregunta.textContent = roscoActivo[currentQuestionIndex].question;
    tituloLetra.textContent = (roscoActivo[currentQuestionIndex].contiene ? 'CONTIENE LA ' : 'EMPIEZA POR ') + roscoActivo[currentQuestionIndex].letter.toUpperCase();
    activarLetra(currentQuestionIndex);
};


const pasapalabra = () => {
    pasapalabras.push(roscoActivo.indexOf(currentQuestionIndex));
    currentQuestionIndex++;
    respuesta.value = '';
    desactivarLetra(currentQuestionIndex);

    if (currentQuestionIndex >= roscoActivo.length) {
        roscoActivo = roscoActivo.filter(item => item.status === 0);
        currentQuestionIndex = 0;
    };

    rosco();
    respuesta.focus();
};

function eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
};

const responder = () => {
    let answer = respuesta.value;
    answer = answer.toLowerCase();
    answer = eliminarDiacriticos(answer);
    if (answer === eliminarDiacriticos(roscoActivo[currentQuestionIndex].answer)) {
        aciertos++;
        roscoActivo[currentQuestionIndex].status = 1;
        correctaLetra(currentQuestionIndex);
        popupCorrecto.style.display = "flex";
    } else if (answer !== roscoActivo[currentQuestionIndex].answer) {
        fallos++;
        errorLetra(currentQuestionIndex);
        popupError.style.display = "flex";
        popupErrorContenido.textContent = `¡Error! La respuesta correcta es ${roscoActivo[currentQuestionIndex].answer.toUpperCase()}.`;
        roscoActivo[currentQuestionIndex].status = 2;
    };
    
    currentQuestionIndex++;
    respuesta.value = '';
    contadorFallos.innerHTML = fallos;
    contadorAciertos.innerHTML = aciertos;
    contadorRestantes.innerHTML = 27 - fallos - aciertos;

    if (currentQuestionIndex >= roscoActivo.length) {
        roscoActivo = roscoActivo.filter(item => item.status === 0);
        currentQuestionIndex = 0;
    };
};


let timerInterval;
let timeOut;

const startGame = () => {
    popupStart.style.display = 'none';
    form.style.display = 'flex';
    containerFallos.style.display  = 'flex';
    containerRestantes.style.display  = 'flex';
    contadorAciertos.style.display  = 'flex';
    temporizador.style.display  = 'flex';
    timerInterval = setInterval(timer, 1000);
    timeOut = setTimeout(timeOver, 201000);

    aciertos = 0;
    fallos = 0;
    pasapalabras = [];

    pregunta.textContent = roscoActivo[0].question;
    currentQuestionIndex = roscoActivo.map(e => e.question).indexOf(pregunta.textContent);

    rosco();
    respuesta.focus();
}


const next = () => {
    if (roscoActivo.every(item => item.status !== 0)) {
        popupFin.style.display = "flex";
        containerFallos.style.display = "none";
        containerRestantes.style.display = "none";
        contadorAciertos.style.display = "none";
        temporizador.style.display = "none";
        popupFinContenido.textContent = `¡Gracias por jugar! Has tenido ${aciertos} ${aciertos === 1 ? 'acierto' : 'aciertos'} y ${fallos} ${fallos === 1 ? 'fallo' : 'fallos'}.`;
        clearInterval(timerInterval);
        clearTimeout(timeOut);
        ended = true;
        createRanking();
        startTime = 200;
        temporizador.innerHTML = startTime;
        return;
    } else {
        rosco();
        respuesta.focus();
    };
};

const timeOver = () => {
    popupFin.style.display = "flex";
    popupCorrecto.style.display = "none";
    popupError.style.display = "none";
    containerFallos.style.display = "none";
    containerRestantes.style.display = "none";
    contadorAciertos.style.display = "none";
    temporizador.style.display = "none";
    popupFinContenido.textContent = `¡TIEMPO! Has tenido ${aciertos} ${aciertos === 1 ? 'acierto' : 'aciertos'} y ${fallos} ${fallos === 1 ? 'fallo' : 'fallos'}.`;
    clearInterval(timerInterval);
    ended = true;
    createRanking();
    startTime = 200;
    temporizador.innerHTML = startTime;
    return;
};

let startTime = 200;
temporizador.innerHTML = startTime;
const timer = () => {
    temporizador.innerHTML = startTime--;
};


botonEmpezar.addEventListener('click', () => {
    if (usernameInput.value === '') {
        return;
    } else { 
        username = usernameInput.value;
        startGame();
    };
});

botonResponder.addEventListener('click', responder);
botonPasapalabra.addEventListener('click', pasapalabra);

window.addEventListener('keydown', event => {
    if (event.key === 'Enter' && popupStart.style.display === 'flex' && usernameInput.value !== '') {
        username = usernameInput.value;
        startGame();
    } else if (event.key === 'Enter' && popupCorrecto.style.display === "flex") {
        popupCorrecto.style.display = "none";
        next();
    } else if (event.key === 'Enter' && popupError.style.display === "flex") {
        popupError.style.display = "none";
        next();
    } else if (event.key === 'Enter' && ended === true) {
        return;
    } else if (event.key === 'Enter' && document.activeElement === respuesta) {
        responder();
    };
});

window.onclick = function(event) {
    if (event.target == popupCorrecto) {
      popupCorrecto.style.display = "none";
      next();
    } else if (event.target == popupError) {
        popupError.style.display = "none";
        next();
    };
};



again.addEventListener('click', () => {
    
    //startTime = 200;
    aciertos = 0;
    fallos = 0;
    pasapalabras = [];
    ended = false;
    
    roscoActivo = [];
    getRandomQuestions();
    roscoActivo.forEach(item => {
        item.status = 0;
    });

    desactivarTodasLetras();
    contadorFallos.innerHTML = fallos;
    contadorAciertos.innerHTML = aciertos;
    contadorRestantes.innerHTML = 27 - fallos - aciertos;


    popupFin.style.display = 'none';
    startGame();
});



const ranking = [
    {username: 'Jugador 1', aciertos: 23},
    {username: 'Jugador 2', aciertos: 11},
    {username: 'Jugador 3', aciertos: 10},
    {username: 'Jugador 4', aciertos: 19},
    {username: 'Jugador 5', aciertos: 26},
    {username: 'Jugador 6', aciertos: 8}
];

const rankingUser2 = document.querySelector('.user2');
const rankingUser1 = document.querySelector('.user1');
const rankingUser3 = document.querySelector('.user3');
const rankingUser4 = document.querySelector('.user4');
const rankingUser5 = document.querySelector('.user5');

const rankingScore1 = document.querySelector('.score1');
const rankingScore2 = document.querySelector('.score2');
const rankingScore3 = document.querySelector('.score3');
const rankingScore4 = document.querySelector('.score4');
const rankingScore5 = document.querySelector('.score5');

const createRanking = () => {
    ranking.push({username, aciertos});
    ranking.sort((a, b) => b.aciertos - a.aciertos);
    ranking.every(item => item.posicion = ranking.indexOf(item) + 1);
    rankingUser1.textContent = ranking[0].username;
    rankingUser2.textContent = ranking[1].username;
    rankingUser3.textContent = ranking[2].username;
    rankingUser4.textContent = ranking[3].username;
    rankingUser5.textContent = ranking[4].username;

    rankingScore1.textContent = ranking[0].aciertos;
    rankingScore2.textContent = ranking[1].aciertos;
    rankingScore3.textContent = ranking[2].aciertos;
    rankingScore4.textContent = ranking[3].aciertos;
    rankingScore5.textContent = ranking[4].aciertos;
};




