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

// elementos tela de resultado

const table_results = document.querySelector("#table");


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
}

// inicialização

createTable(data);

// eventos

clear_btn.addEventListener("click", (param) => {
    param.preventDefault();
    clearInputs();
});