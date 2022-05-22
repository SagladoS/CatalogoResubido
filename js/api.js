async function fetchText() {
    let response = await fetch('/data/datos.json');
    let data = await response.json();
}

async function getCatalogo() {
    let url = '/data/datos.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderCatalogo() {
    let users = await getCatalogo();
    let html = '';
    users.forEach(user => {
        let htmlSegment = ` <div class="card">
                                <img src="${user.img}" class="u-full-width">
                                <div class="info-card">
                                    <h4>${user.titulo}</h2>
                                    <p>${user.descripcion}</p>
                                    <img src="${user.img2}">
                                    <p class="precio">${user.precio} <span>${user.descuento}</span></p>
                                    <a href="#" class="u-full-width button-primary button input agregar-carrito
                                    ">Agregar Al Carrito</a>
                                </div>
                            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.card1');
    container.innerHTML = html;
}

renderCatalogo();
