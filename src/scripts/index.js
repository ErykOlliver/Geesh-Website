const CaptureItens = document.querySelectorAll(".Item");
const TeamContainer = document.querySelector("#TeamContainer");
const container = document.querySelector("#container");
const Teambtn = document.querySelector("#Teambtn")

TeamContainer.ariaDisabled = true

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

if (TeamContainer.className === 'On') {
    document.addEventListener('click', (cl) => {
        if (cl.className != 'On') {
            alert('dfsfs')
        }
    })
}

