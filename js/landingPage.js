const optionsNav = document.querySelectorAll(".opcion-nav")

function mostrarOcultarMenu() {
    const menu = document.getElementById("opciones-nav");
    const btnMenu = document.getElementById("btn-menu-lp");

    const openMenu = menu.classList.contains("hidden")

    if(openMenu){
        menu.classList.remove("hidden")
        btnMenu.classList.add("bg-app-orange", "rounded-xl", "p-1", "text-white")

        setTimeout(() => {
            menu.classList.remove("opacity-0", "pointer-events-none")
            menu.classList.add("opacity-100")
        }, 10);
    }else {
        menu.classList.remove("opacity-100")
        menu.classList.add("opacity-0", "pointer-events-none")
        btnMenu.classList.remove("bg-app-orange", "rounded-xl", "p-1", "text-white")

        setTimeout(() => {
            menu.classList.add("hidden")
        }, 300)
    }
}

optionsNav.forEach(i => {
    i.addEventListener("click", () => {
        mostrarOcultarMenu()
    })
})

