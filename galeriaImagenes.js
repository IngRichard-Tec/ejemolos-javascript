class Imagen{
    constructor(url) {
        this.direccion = url;
    }

    mostrar()
    {
        return `
            <div class="card">
                <img src="${this.direccion}" alt="img">
            </div>
        `
    }
}

const obtenerImages = async () => {
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=6");
    const datos = await res.json();

    let lista = datos.map((img) =>
    {
        return new Imagen(img.download_url);
    });

    document.getElementById("galeria").innerHTML
        = lista.map(i => i.mostrar()).join("");
}

let button = document.getElementById("btnAccion");
button.addEventListener("click", obtenerImages);