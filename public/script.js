const startDate = new Date("2022-02-26");

function update_counter() {
    const dataAtual = new Date();
    const diferenca = dataAtual - startDate;

    const totalSegundos = Math.floor(diferenca / 1000);
    const totalMinutos = Math.floor(totalSegundos / 60);
    const totalHoras = Math.floor(totalMinutos / 60);
    const totalDias = Math.floor(totalHoras / 24);

    const anos = Math.floor(totalDias / 365);
    const diasRestantes = totalDias % 365;
    const horasRestantes = totalHoras % 24;
    const minutosRestantes = totalMinutos % 60;
    const segundosRestantes = totalSegundos % 60;

    document.getElementById("years").textContent = String(anos).padStart(2, '0');
    document.getElementById("days").textContent = String(diasRestantes).padStart(2, '0');
    document.getElementById("hours").textContent = String(horasRestantes).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutosRestantes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(segundosRestantes).padStart(2, '0');
}

update_counter();
setInterval(update_counter, 1000);