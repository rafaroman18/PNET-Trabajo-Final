// GET //

function getAsistentes() {
    var req = $.ajax({
        type: "GET",
        url: "http://localhost:8000/asistentes",
        dataType: "json",
    })

    req.done(function(data) {
        var news = document.querySelector('#res');
        var cont = 1;
        news.innerHTML
        if (typeof data !== 'undefined' && data.length > 0) {

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

                news.innerHTML += card;
            });
            news.innerHTML += finished
        } else {
            let card = `<h1> No hay asistentes </h1>`;
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
        var news = document.querySelector('#res');
        news.innerHTML = ` `;
        if (typeof data !== 'undefined' && data.length > 0) {
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

                news.innerHTML += card;
            });
        } else {
            let card = `<h1> No hay usuarios con ese ID </h1>`;
            news.innerHTML = card;
        }
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
        var news = document.querySelector('#res');
        news.innerHTML = ` `;

        news.innerHTML = `<h1>${data.msg}</h1>`;
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
        var news = document.querySelector('#res');
        news.innerHTML = ` `;

        news.innerHTML = `<h1>${data.msg}</h1>`;
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
        dataType: "json",
        data: asistentes
    })

    req.done(function(data) {
        var news = document.querySelector('#res');
        news.innerHTML = ` `;

        news.innerHTML = `<h1>${data.msg}</h1>`;
    })

    req.fail(function(res) {
        alert("ERROR " + res.statusText);
    })

}

// PUT //
function putAsistente(id, asistente) {

    var req = $.ajax({
        type: "PUT",
        url: "http://localhost:8000/asistentes/" + id,
        contentType: "application/json",
        dataType: "json",
        data: asistente
    })

    req.done(function(data) {
        var news = document.querySelector('#res');
        news.innerHTML = ` `;

        news.innerHTML = `<h1>${data.msg}</h1>`;
    })

    req.fail(function(res) {
        alert("ERROR " + res.statusText);
    })

}