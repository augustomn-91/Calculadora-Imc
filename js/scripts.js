// tabela de dados imc

const data = [
    {
        minimo: 0,
        maximo: 18.4,
        classificacao: "Abaixo de 18,5",
        informacao: "Abaixo do peso",
        nivel: "0"
    },
    {
        minimo: 18.5,
        maximo: 24.9,
        classificacao: "Entre 18,4 e 24,9",
        informacao: "Normal",
        nivel: "0"
    },
    {
        minimo: 25,
        maximo: 29.9,
        classificacao: "Entre 25 e 29,9",
        informacao: "Sobrepeso",
        nivel: "I"
    },
    {
        minimo: 30,
        maximo: 39.9,
        classificacao: "Entre 30 e 39,9",
        informacao: "Obesidade",
        nivel: "II"
    },
    {
        minimo: 40,
        maximo: 99,
        classificacao: "Acima de 40",
        informacao: "Obesidade grave",
        nivel: "III"
    },
];


// elementos da tela inicial 

const height_input = document.querySelector("#height");
const weight_input = document.querySelector("#weight");
const calc_btn = document.querySelector("#calc-btn");
const clear_btn = document.querySelector("#clear-btn");
const screen_calc = document.querySelector("#calc-container");

// elementos tela de resultado

const table_results = document.querySelector("#table");
const screen_result = document.querySelector("#result-container");
const back_btn = document.querySelector("#back-btn");
const result_imc = document.querySelector("#result-imc span");
const classification_imc = document.querySelector("#classification-imc span");

// funções

function createTable(data) {
    data.forEach(element => {
        
        const div = document.createElement("div");
        div.classList.add("table-data");

        const classification = document.createElement("h5");
        classification.innerText = element.classificacao;
        div.appendChild(classification);

        const information = document.createElement("h5");
        information.innerText = element.informacao;
        div.appendChild(information);

        const level = document.createElement("h5");
        level.innerText = element.nivel;
        div.appendChild(level);

        table_results.appendChild(div);

    });
}

function clearInputs() {
    height_input.value = "";
    weight_input.value = "";
};

function validation(elem) {
    return elem.replace(/[^0-9,]/g, "");
};

function hideScreen(){
    screen_calc.classList.toggle("hide");
    screen_result.classList.toggle("hide");
};

function calcImc(height, weight){
    const result = (weight / (height * height)).toFixed(1);
    return result;
};

// eventos

calc_btn.addEventListener("click", function(e){
    e.preventDefault();

    const height = +height_input.value.replace(",", ".");
    const weight = +weight_input.value.replace(",", ".");

    if(!height || !weight) {return};

    const imc = calcImc(height, weight);

    let information;
    
    data.forEach((param) => {
        if(imc >= param.minimo && imc <= param.maximo){
            information = param.informacao;
        };
    });

    if(!information){return};
    

    result_imc.innerText = imc;
    classification_imc.innerText = information;

    hideScreen();

    switch (information) {
        case "Abaixo do peso":
            result_imc.classList.add("low");
            classification_imc.classList.add("low");
            break;
        case "Normal":
            result_imc.classList.add("fine");
            classification_imc.classList.add("fine");
            break;
        case "Sobrepeso":
            result_imc.classList.add("low");
            classification_imc.classList.add("low");
            break;
        case "Obesidade":
            result_imc.classList.add("medium");
            classification_imc.classList.add("medium");
            break;
        case "Obesidade grave":
            result_imc.classList.add("bad");
            classification_imc.classList.add("bad");
            break;           
            
        default:
            break;
    }

});

[height_input, weight_input].forEach((ex) => {
    ex.addEventListener("input", function(param){
        const validation_input = validation(param.target.value);
        param.target.value = validation_input;
    });
});

clear_btn.addEventListener("click", (param) => {
    param.preventDefault();
    clearInputs();
});

back_btn.addEventListener("click", function(){
    hideScreen();
    clearInputs();
});


// inicialização

createTable(data);