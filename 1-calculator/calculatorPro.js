function calculatorPro() {

    let newNumber;
    let numberList = [];

     // prompts for new numbers and alerts if something that's not a number is inserted
    do {
        newNumber = prompt('Enter a number or press cancel to stop');
        while (isNaN(newNumber)) {
            window.alert('Error. Please enter one number only.');
            newNumber = prompt('Enter a new number or press cancel to stop');
        }
        numberList.push(newNumber);
    } while (newNumber !== null);
    
    //removing null
    numberList.pop();

    // turning all numbers into integers
    for (let i = 0; i < numberList.length; i++) {
        numberList[i] = parseInt(numberList[i]);
    }
    console.log(numberList);
    if (numberList.length == 1) {
        let resultSqrt = Math.round((Math.sqrt(numberList[0]))*1000)/1000;
        console.log(`The square root of ${numberList[0]} is ${resultSqrt}.`);
    } else {
        //new result values initialised as the first number in the array
        let newResultSum = numberList[0];
        let newResultSub = numberList[0];
        let newResultMult = numberList[0];
        let newResultDiv = numberList[0];

        for (let i = 1; i < numberList.length; i++) {
            newResultSum += numberList[i];
            newResultSub -= numberList[i];
            newResultMult *= numberList[i];
            newResultDiv = (Math.round((newResultDiv / numberList[i])*1000)/1000);
        }

        console.log(`Results for ${numberList.join(', ')}:
        The result for the sum is ${newResultSum}.
        The result for the substraction is ${newResultSub}.
        The result for the multiplication is ${newResultMult}.
        The result for the division is ${newResultDiv}.`);
    };
    
    const again = confirm('Would you like to run the calculator again?');
    if (again == true) {
        calculatorPro();
    } else {
        console.log('¡Hasta luego!');
    }
}

calculatorPro();