const clock = document.getElementById('clock')


// console.log(clock1.toLocaleTimeString());
 
setInterval(function () {
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)