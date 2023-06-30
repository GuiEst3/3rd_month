const dates = [
    {
        tit: "Pedido de namoro",
        date: new Date(2023, 3, 1),
        arquivo: "ped_nam"
    },
    {
        tit: "1º mês",
        date: new Date(2023, 4, 1),
        arquivo: "pri_mes"
    },
    {
        tit: "2º mês",
        date: new Date(2023, 5, 1),
        arquivo: "seg_mes"
    },
    {
        tit: "3º mês",
        date: new Date(2023, 6, 1),
        arquivo: "ter_mes"
    },
    {
        tit: "1º Dia dos Namorados",
        date: new Date(2023, 6, 12),
        arquivo: "dia_nam"
    },
    {
        tit: "4º Mês",
        date: new Date(2023, 7, 1),
        arquivo: "qua_mes"
    },
    {
        tit: "5º Mês",
        date: new Date(2023, 8, 1),
        arquivo: "qui_mes"
    },
    {
        tit: "6º Mês",
        date: new Date(2023, 9, 1),
        arquivo: "sex_mes"
    },
    {
        tit: "7º Mês",
        date: new Date(2023, 10, 1),
        arquivo: "set_mes"
    },
    {
        tit: "8º Mês",
        date: new Date(2023, 11, 1),
        arquivo: "oit_mes"
    },
    {
        tit: "9º Mês",
        date: new Date(2023, 12, 1),
        arquivo: "non_mes"
    },
    {
        tit: "10º Mês",
        date: new Date(2024, 1, 1),
        arquivo: "dec_mes"
    },
    {
        tit: "11º Mês",
        date: new Date(2024, 2, 1),
        arquivo: "dpr_mes"
    },
    {
        tit: "1º ANO",
        date: new Date(2024, 3, 1),
        arquivo: "pri_ano"
    }
];

const btns = document.querySelector(".buttons");

for (let i = 0; i < dates.length; i++) {
    renderBut(dates[i]);
}

function renderBut(info) {
    var dataAtual = new Date();

    var ano = dataAtual.getFullYear();
    var mes = dataAtual.getMonth() + 1;
    var dia = dataAtual.getDate();

    var hoje = new Date(ano, mes, dia)

    if (hoje >= info.date) {
        const but = document.createElement("div");
        but.classList.add("buttons");
    
        but.innerHTML = `
        <li><a href="${info.arquivo}.html">${info.tit}</a></li>
        `;

        btns.appendChild(but);
    }
}