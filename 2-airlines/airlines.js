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

function airline() {
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
        console.log(`El vuelo con origen: ${flights[flight].from}, y destino: ${flights[flight].to} tiene un coste de ${flights[flight].cost}€ y ${flights[flight].scale === true ? 'realiza una o más escalas.' : 'no realiza ninguna escala.'}`);

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
};

airline();