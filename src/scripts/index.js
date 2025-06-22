const CaptureItens = document.querySelectorAll(".Item");
const TeamContainer = document.querySelector("#TeamContainer");
const container = document.querySelector("#container");
const Teambtn = document.querySelector("#Teambtn")
const TeamClose = document.querySelector("#closeTeamContainer")

CaptureItens.forEach(elem => {
    elem.addEventListener('mouseover', () => {
        elem.classList.add('hoverItem');
    })

    elem.addEventListener('mouseleave', () => {
        setTimeout(() => {
            elem.classList.remove('hoverItem');
        }, 500)
    })
})

Teambtn.addEventListener("click", () => {
    container.classList.add('blur')
    TeamContainer.classList.add('On')
})

TeamClose.addEventListener("click", () => {
    container.classList.remove('blur')
    TeamContainer.classList.remove('On')
})


