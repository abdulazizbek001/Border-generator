const elInputRange = document.querySelector('.input-range');
const elBox = document.querySelector('.box');
const elInputColor = document.querySelector('.input-color');
const elRezult = document.querySelector('.rezult');
const elCopyBox = document.querySelector('.copy-box');
const elCopyBtn = document.querySelector('.btn');

function solid() {
    
    elBox.style.border = `${elInputRange.value}px solid ${elInputColor.value}`;
    elInputRange.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px solid ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px solid ${elInputColor.value}`
    })
    elInputColor.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px solid ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px solid ${elInputColor.value}`
    })

    elRezult.textContent = `${elInputRange.value}px solid ${elInputColor.value}`
    elCopyBtn.removeAttribute('disabled')

}

function ridge() {
    elCopyBtn.setAttribute('disabled', '')

    elBox.style.border = `${elInputRange.value}px ridge ${elInputColor.value}`;
    elInputRange.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px ridge ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px ridge ${elInputColor.value}`
    })
    elInputColor.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px ridge ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px ridge ${elInputColor.value}`
    })

    elRezult.textContent = `${elInputRange.value}px ridge ${elInputColor.value}`
    elCopyBtn.removeAttribute('disabled')
}

function outset() {
    elBox.style.border = `${elInputRange.value}px outset ${elInputColor.value}`;
    elInputRange.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px outset ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px outset ${elInputColor.value}`
    })

    elInputColor.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px outset ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px outset ${elInputColor.value}`
    })

    elRezult.textContent = `${elInputRange.value}px outset ${elInputColor.value}`
    elCopyBtn.removeAttribute('disabled')
}

function double() {
    elBox.style.border = `${elInputRange.value}px double ${elInputColor.value}`;
    elInputRange.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px double ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px double ${elInputColor.value}`
    })

    elInputColor.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px double ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px double ${elInputColor.value}`
    })

    elRezult.textContent = `${elInputRange.value}px double ${elInputColor.value}`
    elCopyBtn.removeAttribute('disabled')
}

function dashed() {
    elBox.style.border = `${elInputRange.value}px dashed ${elInputColor.value}`;
    elInputRange.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px dashed ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px dashed ${elInputColor.value}`
    })

    elInputColor.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px dashed ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px dashed ${elInputColor.value}`
    })

    elRezult.textContent = `${elInputRange.value}px dashed ${elInputColor.value}`
    elCopyBtn.removeAttribute('disabled')
}

function groove() {
    elBox.style.border = `${elInputRange.value}px groove ${elInputColor.value}`;
    elInputRange.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px groove ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px groove ${elInputColor.value}`
    })

    elInputColor.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px groove ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px groove ${elInputColor.value}`
    })

    elRezult.textContent = `${elInputRange.value}px  groove  ${elInputColor.value}`
    elCopyBtn.removeAttribute('disabled')
}

function dotted() {
    elBox.style.border = `${elInputRange.value}px dotted ${elInputColor.value}`;
    elInputRange.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px dotted ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px dotted ${elInputColor.value}`
    })

    elInputColor.addEventListener('input', () => {
        elBox.style.border = `${elInputRange.value}px dotted ${elInputColor.value}`;
        elRezult.textContent = `${elInputRange.value}px dotted ${elInputColor.value}`
    })

    elRezult.textContent = `${elInputRange.value}px dotted ${elInputColor.value}`
    elCopyBtn.removeAttribute('disabled')
}

function elBtn() {
    navigator.clipboard.writeText(elRezult.textContent);
    elCopyBox.style.display = 'flex'
    setTimeout(() => {
        elCopyBox.style.display = 'none'
    }, 600);
    elRezult.textContent = ''

    if (elRezult.textContent == '') {
        elCopyBtn.setAttribute('disabled', 'disabled')
    }
}