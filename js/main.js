const btn_back = document.querySelectorAll(".btn-back")

btn_back.forEach(i => {
    i.addEventListener("click", () => {
        window.history.back()
    })
})


