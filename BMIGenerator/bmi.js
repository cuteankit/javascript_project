const form = document.querySelector('form')

//this usecase give yu empty value
// const weight = parseInt(document.querySelector('#weight').value);


form.addEventListener('submit', function (c) {
    c.preventDefault()

    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const result = document.querySelector('#result')

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `please enter valid ${height}`
    }else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please enter valid ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi > 24.9) {
            result.innerHTML = `BMI = ${bmi} Kg/m2, You are overweight.`
        }else if (bmi>=18.6 && bmi<= 24.9) {
            result.innerHTML = `BMI = ${bmi} Kg/m2, You are normal.`
        } else {
            result.innerHTML = `BMI = ${bmi} Kg/m2, You are underweight.`
        }
    }
    //console.log(bmi);
});