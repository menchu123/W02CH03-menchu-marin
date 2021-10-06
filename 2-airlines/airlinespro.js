let flights = [
        { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
        { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
        { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
        { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
        { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
        { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
        { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
        { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
        { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
        { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
        { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


function addNewFlights() {
    let addFlights = window.confirm('¿Quiere añadir algún vuelo?');
    if (addFlights === false) {
        return;
    } else if (flights.length >= 15) {
        window.alert('Ha alcanzado el máximo de vuelos posibles.')
    } else {
        let from = window.prompt('Introduzca el origen:');
        if (from === null) {
            window.alert('Vuelo no añadido.');
            return;
        };
        while (from === '') {
            from = window.prompt('No se puede añadir un vuelo sin origen. Introduzca el origen:');
        };
        let to = window.prompt('Introduzca el destino:');
        if (to === null) {
            window.alert('Vuelo no añadido.');
            return;
        };
        while (to === '') {
            to = window.prompt('No se puede añadir un vuelo sin destino. Introduzca el destino:');
        };
        let cost = window.prompt('Introduzca el precio:');
        if (cost === null) {
            window.alert('Vuelo no añadido.');
            return;
        };
        while (cost === '') {
            cost = window.prompt('No se puede añadir un vuelo sin precio. Introduzca el precio:');
        };

        while (isNaN(cost)) {
            cost = window.prompt('Respuesta no válida. Introduzca un número:')
        };

        let scale = window.prompt('¿Hace escala? Sí/No');
        if (scale === null) {
            window.alert('Vuelo no añadido.');
            return;
        };
        while (scale === '') {
            scale = window.prompt('No se puede añadir un vuelo sin precisar si hace escala. ¿Hace escala? Sí/No');
        };
        scale = scale.toLowerCase();
        while (scale !== 'sí' && scale !== 'si' && scale !== 'no') {
            scale = (window.prompt('Respuesta no válida. ¿Hace escala? Sí/No')).toLowerCase();
        };
        if (scale === 'sí' || scale === 'si') {
            scale = true;
        } else if (scale === 'no') {
            scale = false;
        };

        const newFlight = {
            id: (flights.length - 1) + 1,
            to,
            from,
            cost,
            scale
        }
        flights.push(newFlight);
        console.log('Esta es la lista actualizada de vuelos:');
        for (let flight in flights) {
            console.log(`El vuelo con origen: ${flights[flight].from}, y destino: ${flights[flight].to} tiene un coste de ${flights[flight].cost}€ y ${flights[flight].scale === true ? 'realiza una o más escalas.' : 'no realiza ninguna escala.' } Su ID es ${flights[flight].id}.`);
        };
        addNewFlights();
    };
};

function deleteFlights() {
    let deleteOption = window.confirm('¿Desea eliminar algún vuelo?');
    if (deleteOption === false) {
        console.log('Gracias por su visita.');
        return;
    } else {
        let flightId = window.prompt('Introduzca el ID del vuelo que desea eliminar:');
        while (flightId === '') {
            flightId = window.prompt('Necesitamos el ID del vuelo para poder eliminarlo. Introduzca el ID del vuelo que desea eliminar:');
        };
        while (isNaN(flightId) === true) {
            flightId = window.prompt('Respuesta no válida. Introduzca un número:')
        };
        if (flightId === null) {
            console.log('No se eliminó ningún vuelo.');
        } else if (flights.some(item => item.id == flightId) === false) {
            window.alert('El ID introducido no existe. Pruebe de nuevo.');
            deleteFlights();
        } else {
            flightId = Number(flightId);
            let idArray = flights.map(item => item.id);
            let removeIndex = idArray.indexOf(flightId);
            flights.splice(removeIndex, 1);
            console.log('Esta es la lista actualizada de vuelos:');
            for (let flight in flights) {
                console.log(`El vuelo con origen: ${flights[flight].from}, y destino: ${flights[flight].to} tiene un coste de ${flights[flight].cost}€ y ${flights[flight].scale === true ? 'realiza una o más escalas.' : 'no realiza ninguna escala.'} Su ID es ${flights[flight].id}.`);
            };
            deleteFlights();
        };
    };
};

function userFunc() {
    let costSearch = window.prompt('Introduzca un precio para su búsqueda:');
    if (costSearch === null) {
        window.alert('¡Hasta luego!');
        return;
    };
    while (costSearch === '') {
        costSearch = window.prompt('Introduzca un precio para su búsqueda:');
    };
    while (isNaN(costSearch)) {
        costSearch = window.prompt('Respuesta no válida. Introduzca un número:')
    };
    const costArray = flights.map(item => item.cost);
    let closest = costArray.reduce((a, b) => {
        let aDiff = Math.abs(a - costSearch);
        let bDiff = Math.abs(b - costSearch);

        if (aDiff == bDiff) {
            return a < b ? a : b;
        } else {
            return bDiff < aDiff ? b : a;
        }
    });
    let costOrdered = costArray.slice();

    costOrdered.sort(function(a, b) {
    return a - b;
    });
    let closestOver = costOrdered[costOrdered.indexOf(closest) + 1];
    let closestUnder = costOrdered[costOrdered.indexOf(closest) - 1];

    let indexClosestOver = costArray.indexOf(closestOver);
    let indexClosestUnder = costArray.indexOf(closestUnder);
    let indexClosest = costArray.indexOf(closest);

    console.log(`Los vuelos con el precio más aproximado son:
    Vuelo con origen: ${flights[indexClosest].from}, y destino: ${flights[indexClosest].to}, con un coste de ${flights[indexClosest].cost}€. ${flights[indexClosest].scale === true ? 'Realiza una o más escalas.' : 'No realiza ninguna escala.'} Su número de identificación es el ${flights[indexClosest].id}. 
    ${closestOver == undefined ? '' : `Vuelo con origen: ${flights[indexClosestOver].from}, y destino: ${flights[indexClosestOver].to}, con un coste de ${flights[indexClosestOver].cost}€. ${flights[indexClosestOver].scale === true ? 'Realiza una o más escalas.' : 'No realiza ninguna escala.'} Su número de identificación es el ${flights[indexClosestOver].id}.`}
    ${closestUnder == undefined ? '' : `Vuelo con origen: ${flights[indexClosestUnder].from}, y destino: ${flights[indexClosestUnder].to}, con un coste de ${flights[indexClosestUnder].cost}€. ${flights[indexClosestUnder].scale === true ? 'Realiza una o más escalas.' : 'No realiza ninguna escala.'} Su número de identificación es el ${flights[indexClosestUnder].id}.`}`);

    let idPurchase = window.prompt('¿Qué vuelo desea comprar? Introduzca su número de identificación:');
    if (idPurchase === null) {
        console.log('Gracias por su visita.');
        return;
    };
    while (idPurchase === '') {
        idPurchase = window.prompt('Introduzca el número de identificación del vuelo que desea comprar:');
    };
    while (isNaN(idPurchase)) {
        idPurchase = window.prompt('Respuesta no válida. Introduzca un número:')
    };
    idPurchase = Number(idPurchase);

    while (flights.some(item => item.id == idPurchase) === false) {
        window.alert('El número introducido no existe. Pruebe de nuevo.');
        idPurchase = window.prompt('¿Qué vuelo desea comprar? Introduzca su número de identificación:');
        while (idPurchase === '') {
            idPurchase = window.prompt('Introduzca el número de identificación del vuelo que desea comprar:');
        };
        while (isNaN(idPurchase)) {
            idPurchase = window.prompt('Respuesta no válida. Introduzca un número:')
        };
        idPurchase = Number(idPurchase);
    };
    let idArray = flights.map(item => item.id);
    let flightPurchasedIndex = idArray.indexOf(idPurchase);
    console.log(`Gracias por comprar el vuelo con origen ${flights[flightPurchasedIndex].from} y destino ${flights[flightPurchasedIndex].to}. Vuelva pronto.`)
};

function airlinePro() {
    let userName = window.prompt('¡Bienvenido a Skylab Airlines! Introduzca su nombre:');
    if (userName === null) {
        window.alert('¡Hasta luego!');
        return;
    } else if (userName === "") {
        userName = 'invitado'
    };
    console.log(`Hola, ${userName}. Gracias por usar Skylab Airlines. A continuación verá los vuelos disponibles para hoy:`);
    let costeVuelos = 0;
    let vuelosEscala = 0;
    let ultimosDestinos = [];
    for (let flight in flights) {
        console.log(`El vuelo con origen: ${flights[flight].from}, y destino: ${flights[flight].to} tiene un coste de ${flights[flight].cost}€ y ${flights[flight].scale === true ? 'realiza una o más escalas.' : 'no realiza ninguna escala.'} Su ID es ${flights[flight].id}.`);

        costeVuelos += flights[flight].cost;

        if (flights[flight].scale === true) {
            vuelosEscala ++;
        };

        if (flights[flight].id >= 05) {
            ultimosDestinos.push(flights[flight].to);
        };
    };
    let costeMedio = (costeVuelos / flights.length).toFixed(2);
    console.log(`El coste medio de los vuelos es de ${costeMedio}€.`);

    console.log(`Un total de ${vuelosEscala} vuelos efectúan escalas.`);

    console.log(`Los destinos de los últimos vuelos del día son: ${ultimosDestinos.join(', ')}.`);

    let adminUser = window.prompt('Es admin o user?');
    if (adminUser === null) {
        window.alert('¡Hasta luego!');
        return;
    } else {
        adminUser = adminUser.toLowerCase();
    };
    while (adminUser !== 'admin' && adminUser !== 'user') {
        adminUser = (window.prompt("Respuesta no válida. Introduzca 'admin' o 'user'.")).toLowerCase();
    };
    if (adminUser === 'user') {
        userFunc();
    } else if (adminUser === 'admin') {
        addNewFlights();
        deleteFlights();
    };
};



airlinePro();