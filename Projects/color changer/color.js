const body = document.querySelector('body');
const button = document.querySelectorAll('.button');

  function color() {
     var x = document.getElementById('myColor').value;
     body.style.background = x;
}

button.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', function (e) {
        // console.log(e)
        // console.log(e.target)
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id
        }
    })
} )