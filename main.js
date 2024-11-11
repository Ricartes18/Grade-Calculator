const grade = document.getElementById('grades'); 
const calc = document.getElementById('calculator'); 
const calculate = document.getElementById("calculate");
const clear = document.getElementById("clear");
const form = document.querySelector("#formcalc");
const info = document.getElementById('info');
let dg = []

// Disable the buttons when there is no inputs
if (window.location.href.indexOf('calculator.html') > -1){
    calculate.disabled = true;
    clear.disabled = true;
    calculate.classList.add('disabled');
}


function check() {
    const inputs = document.querySelectorAll('input[required]');
    let fill = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            fill = false;
            calculate.classList.remove('disabled')
        } 
    });

    calculate.disabled = !fill;
    
}

document.querySelectorAll('input[required]').forEach(inputs => {
        inputs.addEventListener('input', check)
    })


calculate.addEventListener('click', (event) => {
    event.preventDefault
    check()
    calculator()
    clear.disabled = false;
})

// calculates the grade
function calculator() {
    const term = document.querySelector('input[name="pmf"]:checked').value;
    const type = document.querySelector('input[name="ll"]:checked').value;
    const sub = document.getElementById('subject').value;
    const css = parseFloat(document.getElementById('css').value);
    const cst = parseFloat(document.getElementById('cst').value);
    const mes = parseFloat(document.getElementById('mes').value);
    const met = parseFloat(document.getElementById('met').value);
    let total,ttotal,stotal;

    document.getElementById('subjects').innerHTML = sub.toUpperCase();
    document.getElementById('term').innerHTML = term.toUpperCase();
    document.getElementById('lab-lec').innerHTML = type.toUpperCase();

    if (type === 'laboratory') {
        const cs = .60;
        const me = .40;

        stotal = parseFloat(((css / cst)) * 100).toFixed(4);
        ttotal = (((mes / met)) * 100) 

        total = (stotal * cs) + (ttotal * me)
        
    } else {
        const cs = .70;
        const me = .30;

        stotal = parseFloat(((css / cst)) * 100).toFixed(4);
        ttotal = (((mes / met)) * 100)

        total = (stotal * cs) + (ttotal * me)
    }

    const computed = document.getElementById('computed');
    const tv = transval(total)
    computed.innerHTML = `
                                <td id="csa">${stotal}</td>
                                <td id="mea">${ttotal.toFixed(4)}</td>
                                <td id="ca">${total.toFixed(4)}</td>
                                <td id="tv">${tv}</td>
                                <td id="cg">${cug(tv)}</td>`;
    

    document.getElementById('csa').innerHTML = `${stotal}`

}

const transval = (csa) => {

    if (csa >= 98.75) {
        tv = 100
    } else if (csa >= 97.75) {
        tv = 99
    } else if (csa >= 96.5) {
        tv = 98
    } else if (csa >= 94) {
        tv = 97
    } else if (csa <= 93.9999 && csa >= 92) {
        tv = 96
    } else if (csa <= 91.9999 && csa >= 90) {
        tv = 95
    } else if (csa <= 89.9999 && csa >= 88) {
        tv = 94
    } else if (csa <= 87.9999 && csa >= 86) {
        tv = 93
    } else if (csa <= 85.9999 && csa >= 84) {
        tv = 92
    } else if (csa <= 83.9999 && csa >= 82) {
        tv = 91
    } else if (csa <= 81.9999 && csa >= 80) {
        tv = 90
    } else if (csa <= 79.9999 && csa >= 78) {
        tv = 89
    } else if (csa <= 77.9999 && csa >= 76) {
        tv = 88
    } else if (csa <= 75.9999 && csa >= 74) {
        tv = 87
    } else if (csa <= 73.9999 && csa >= 72) {
        tv = 86
    } else if (csa <= 71.9999 && csa >= 70) {
        tv = 85
    } else if (csa <= 69.9999 && csa >= 68) {
        tv = 84
    } else if (csa <= 67.9999 && csa >= 66) {
        tv = 83
    } else if (csa <= 65.9999 && csa >= 64) {
        tv = 82
    } else if (csa <= 63.9999 && csa >= 62) {
        tv = 81
    } else if (csa <= 61.9999 && csa >= 60) {
        tv = 80
    } else if (csa <= 59.9999 && csa >= 58) {
        tv = 79
    } else if (csa <= 57.9999 && csa >= 56) {
        tv = 78
    } else if (csa <= 55.9999 && csa >= 54) {
        tv = 77
    } else if (csa <= 53.9999 && csa >= 52) {
        tv = 76
    } else {
        tv = 75
    }

    return tv
}

const cug = (tv) => {
    if (tv <= 100 && tv >= 97) {
        cg = 1.00
    } else if (tv <= 96 && tv >= 94) {
        cg = 1.25
    } else if (tv <= 93 && tv >= 91) {
        cg = 1.50
    } else if (tv <= 90 && tv >= 88) {
        cg = 1.75
    } else if (tv <= 87 && tv >= 85) {
        cg = 2.00
    } else if (tv <= 84 && tv >= 82) {
        cg = 2.25
    } else if (tv <= 81 && tv >= 79) {
        cg = 2.50
    } else if (tv <= 78 && tv >= 76) {
        cg = 2.75
    } else {
        cg = 3.00
    }

    return cg
} 

// clears the inputs and output
function clearall() { 
    document.getElementById('css').value = "";
    document.getElementById('cst').value = "";
    document.getElementById('mes').value = "";
    document.getElementById('met').value = "";
    document.getElementById('subjects').innerHTML = "";
    document.getElementById('term').innerHTML = "";
    document.getElementById('lab-lec').innerHTML = "";
    document.getElementById('csa').innerHTML = ""
    document.getElementById('mea').innerHTML = ""
    document.getElementById('ca').innerHTML = ""
    document.getElementById('tv').innerHTML = ""
    document.getElementById('cg').innerHTML = ""

    info.innerText = "Cleared"
    clear.disabled = true;
   
}

clear.addEventListener('click', (e) => {
    e.preventDefault
    window.stop
    clearall()
})