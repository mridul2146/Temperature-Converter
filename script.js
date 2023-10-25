function convertToFar() {
    const celsiusInput = document.getElementById('celsius-input').value;
    const resultElement = document.getElementById('result');

    if (celsiusInput === '') {
        resultElement.innerText = 'Please enter a value.';
        return;
    }

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;

    resultElement.innerText = `${celsius}°C is equal to ${fahrenheit}°F`;
}
