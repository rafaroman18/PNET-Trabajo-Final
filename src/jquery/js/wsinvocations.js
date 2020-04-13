// GET //

function getAsistentes() {
    var req = $.ajax({
        type: "GET",
        url: "http://localhost:8000/asistentes",
        dataType: "json",
    })

    req.done(function(data) {
        var news = document.querySelector('#res');
        news.innerHTML = ` `;
        if (typeof data !== 'undefined' && data.length > 0) {
            var cont = 0
            data.forEach(data => {
                let card = `
                        <div class="asistente">
                            <div class="container">
                                <h4>Id: <span class="users">${data._id}</span></h4>
                                <h4>Nombre: <span class="users">${data.nombre}</span></h4>
                                <h4>Apellidos: <span class="users">${data.apellidos}</span></h4>
                                <h4>Correo Electrónico: <span class="users">${data.correo}</span></h4>
                                <h4>Fecha Entrada: <span class="users">${data.fechaentrada}</span></h4>
                                <h4>Fecha Salida: <span class="users">${data.fechasalida}</span></h4>
                                <h4>Tipo de Inscripción: <span class="users">${data.inscripcion}</span></h4>
                            </div>
                        </div>
                    `;
                cont++;
                if (cont == 3) {
                    card += `<a></a>`
                    alert(card);
                }
                news.innerHTML += card;
            });
        } else {
            let card = `<h1> No hay usuarios </h1>`;
            news.innerHTML = card;
        }

    })

    req.fail(function(res) {
        alert("ERROR " + res.statusText);
    })

}

function getAsistente(asistente) {
    var req = $.ajax({
        type: "GET",
        url: "http://localhost:8000/asistentes/" + asistente,
        dataType: "json",
    })

    req.done(function(data) {
        $("#res").html(JSON.stringify(data))
    })

    req.fail(function(res) {
        alert("ERROR " + res.statusText);
    })

}

// DELETE //
function deleteAsistentes() {
    var req = $.ajax({
        type: "DELETE",
        url: "http://localhost:8000/asistentes",
        dataType: "json",
    })

    req.done(function(data) {
        $("#res").html(JSON.stringify(data))
    })

    req.fail(function(res) {
        alert("ERROR " + res.statusText);
    })

}


function deleteAsistente(asistente) {
    var req = $.ajax({
        type: "DELETE",
        url: "http://localhost:8000/asistentes/" + asistente,
        dataType: "json",
    })

    req.done(function(data) {
        $("#res").html(JSON.stringify(data))
    })

    req.fail(function(res) {
        alert("ERROR " + res.statusText);
    })

}

// POST //
function postAsistentes(asistentes) {

    var req = $.ajax({
        type: "POST",
        url: "http://localhost:8000/asistentes/",
        contentType: "application/json",
        dataType: "text",
        data: asistentes
    })

    req.done(function(data) {
        $("#res").html(data)
    })

    req.fail(function(res) {
        alert("ERROR " + res.statusText);
    })

}