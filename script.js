const botones = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const filtro = boton.dataset.filtro;

        botones.forEach(function (b) {
            b.classList.remove("activo");
        });
        boton.classList.add("activo");

        productos.forEach(function (producto) {
            const categoria = producto.dataset.categoria;

            if (filtro === "todo" || categoria === filtro) {
                producto.hidden = false;
            } else {
                producto.hidden = true;
            }
        });
    });
});