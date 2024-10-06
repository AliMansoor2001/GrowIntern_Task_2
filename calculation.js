 
    const screen = document.querySelector("#result");
    const btns = document.querySelectorAll(".num_pad");
    const clear = document.querySelector("#clear_data");
    const equal = document.querySelector("#equal_value");


btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let value = e.target.dataset.num;
        if (value !== undefined) {
            screen.value += value;
        }
    })
})

clear.addEventListener('click', function() {
    screen.value = "";
})

equal.addEventListener('click', function(e) {
    if (screen.value === '') {
        screen.value = "Please enter";
    } else {
        try {
            let answer = eval(screen.value);
            screen.value = answer;
        } catch (error) {
            screen.value = "Error";
        }
    }
})

