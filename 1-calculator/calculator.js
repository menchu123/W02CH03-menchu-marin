function calculator() {
    let userInput = prompt('Please insert one or two numbers.');
    
    // in case the user separates the numbers with a space, a comma, a comma and a space of a dash
    if (userInput.includes(', ')) {
        userInput = userInput.split(', ')
    } else if (userInput.includes(' ')) {
        userInput = userInput.split(' ')
    } else if(userInput.includes(',')) {
        userInput = userInput.split(',')
    } else if(userInput.includes('-')) {
        userInput = userInput.split('-')
    }

    // turns input into array if it hasn't been done in previous step
    if (typeof userInput == 'string') {userInput = userInput.split()};

    // sends error message if there are more than two inputs, or if either is not a number. Prompts again.
    while (userInput.some(input => isNaN(input)) || userInput.length > 2) {
        window.alert('Error. Please enter one or two numbers only.');
        userInput = prompt('Please insert one or two numbers.');
        // does same checks on input as above
        if (userInput.includes(', ')) {
            userInput = userInput.split(', ')
        } else if (userInput.includes(' ')) {
            userInput = userInput.split(' ')
        } else if(userInput.includes(',')) {
            userInput = userInput.split(',')
        } else if(userInput.includes('-')) {
            userInput = userInput.split('-')
        }
        if (typeof userInput == 'string') {userInput = userInput.split('')};
    }

    // turns strings into numbers so that additions sum and not concatenate
    let num1 = Number(userInput[0]);
    let num2 = Number(userInput[1]);

    const results = []; 

    if (userInput.length == 1) {
        let resultSqrt = Math.round((Math.sqrt(userInput))*1000)/1000;
        results.push(resultSqrt);
        console.log(`The square root of ${userInput} is ${results[0]}.`);
    } else {
        let resultSum = (Math.round((num1 + num2)*1000)/1000);
        let resultSub = (Math.round((num1 - num2)*1000)/1000);
        let resultMult = (Math.round((num1 * num2)*1000)/1000);
        let resultDiv= (Math.round((num1 / num2)*1000)/1000);
        results.push(resultSum, resultSub, resultMult, resultDiv);
        console.log(`Results for ${userInput.join(' and ')}:
        The result for the sum is ${results[0]}.
        The result for the substraction is ${results[1]}.
        The result for the multiplication is ${results[2]}.
        The result for the division is ${results[3]}.`);
    }
}
calculator();