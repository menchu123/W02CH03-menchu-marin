let carton = [];

function numberGenerator(arr) {
    if (arr.length >= 15) return;
    let newNumber = Math.floor(Math.random() * 89 + 1);
    if (arr.indexOf(newNumber) < 0) {
      arr.push(newNumber);
    }
    numberGenerator(arr);
  };

function generateCarton() {
    carton = [];
    let cartonUnarranged = []
    numberGenerator(cartonUnarranged);
    let firstLineCarton = cartonUnarranged.slice(0, 5);
    let secondLineCarton = cartonUnarranged.slice(5, 10);
    let thirdLineCarton = cartonUnarranged.slice(10, 15);
    carton.push(firstLineCarton);
    carton.push(secondLineCarton);
    carton.push(thirdLineCarton);
};

let bomboArr = [];
let randomNumber;


function bombo() {
    randomNumber = Math.floor(Math.random() * 89 + 1);
    while (bomboArr.some(item => item === randomNumber)) {
        randomNumber = Math.floor(Math.random() * 89 + 1);
    };
    bomboArr.push(randomNumber);
    console.log(`Ha salido el ${randomNumber}.`);
};

const isMarked = number => number === 'x';

let hayLinea = false;
let hayBingo = false;

function marcarCarton() {
    for (let i = 0; i < carton.length; i++) {
        for (let j = 0; j < carton[i].length; j++) {
            if (carton[i][j] === randomNumber) {
                carton[i][j] = 'x';
                console.log('¡Bien hecho!');
                console.table(carton, 5);
            };
        };
        const isMarked = number => number === 'x';
        if (carton[i].every(isMarked) === true && hayLinea === false) {
            console.log('¡LÍNEA!');
            hayLinea = true;
        };
    };
    if (carton[0].every(isMarked) === true  && carton[1].every(isMarked) === true  && carton[2].every(isMarked) === true) {
        hayBingo = true;
        console.log('¡BINGO!');
    };
};

function nuevoTurno() {
    let otroTurno = window.confirm('¿Nuevo turno?');
    if (otroTurno === true) {
        bombo();
        marcarCarton();
        if (hayBingo === false) {
            nuevoTurno();
        };
    } else if (otroTurno === false) {
        console.log('¡Gracias por venir!');
    };
};

const rankingUsuarios = [
    {username: 'Jugador 1', puntos: 9},
    {username: 'Jugador 2', puntos: 0},
    {username: 'Jugador 3', puntos: 11},
    {username: 'Jugador 4', puntos: 2}
];

function bingo() {
    generateCarton();
    let username = window.prompt('¿Cómo te llamas?');
    if (username === '') {
        username = ('Jugador ' + (rankingUsuarios.length + 1)); 
    } else if (username === null) {
        window.alert('¡Hasta luego!');
        return;
    }
    console.log(`Hola, ${username}. 
    Sistema de puntos:
    La puntuación va de 0 a 20. Si consigues llegar a bingo en menos de 60 turnos, conseguirás el máximo de puntos, 20. A partir de ahí, cuantos más turnos necesites, menos puntos obtendrás.
    Este es tu cartón:`);
    console.table(carton, 5);
    let elegirCarton = window.confirm(`Selecciona OK si te gusta tu cartón, o Cancelar para elegir otro.`);
    while (elegirCarton === false) {
        generateCarton();
        console.table(carton, 5);
        elegirCarton = window.confirm(`Aquí tienes un nuevo cartón. Selecciona OK si te gusta, o Cancelar para elegir otro.`);
    };
    let empezar = window.confirm('¿Empezamos?');
    if (empezar === true && hayBingo === false) {
        bombo();
        marcarCarton();
        nuevoTurno();
    } else if (empezar === false && hayBingo === false) {
        console.log('¡Gracias por venir!');
    };
    // point system
    let puntos;
    puntos = Math.round(20 - ((bomboArr.length - 60) * 0.69));
    //
    if (hayBingo === true) {
        console.log(`${username}, has necesitado ${bomboArr.length} turnos para ganar bingo. Tu puntuación es de ${puntos}`);
        rankingUsuarios.push(
            {username, puntos: Math.abs(puntos)}
        );
        rankingUsuarios.sort((a, b) => b.puntos - a.puntos);
        rankingUsuarios.every(item => item.posicion = rankingUsuarios.indexOf(item) + 1);
        console.log('Ranking:')
        console.table(rankingUsuarios);
        const otraPartida = window.confirm('¿Quieres volver a jugar?');
        if (otraPartida === true) {
            carton = [];
            bomboArr = [];
            hayLinea = false;
            hayBingo = false;
            bingo();
        } else {
            console.log('¡Gracias por jugar!')
        };
    };
};



bingo();


